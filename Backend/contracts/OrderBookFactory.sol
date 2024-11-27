// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// Importa el contrato Ownable de OpenZeppelin para gestionar la propiedad del contrato
import "@openzeppelin/contracts/access/Ownable.sol";
import "./OrderBook.sol";

/**
 * @title OrderbookFactory
 * @dev Este contrato actúa como una fábrica para crear múltiples Orderbooks para pares de tokens únicos.
 * Si ya existe un Orderbook para un par de tokens, la ejecución del contrato revertirá.
 */
contract OrderbookFactory is Ownable {
    // Número de pares soportados
    uint256 public pairsSupported;

    // Mapeo de Orderbooks existentes. La clave es el identificador único del par de tokens
    mapping(bytes32 => address) public orderbooks;

    // Evento emitido cada vez que se agrega un nuevo par de tokens
    event NewPair(address indexed token1, address indexed token2, address orderbook);

    /**
     * @dev Crea una nueva instancia del contrato Orderbook para el par de tokens especificado.
     * @param _token1 Dirección del primer token.
     * @param _token2 Dirección del segundo token.
     *
     * Requiere que:
     * - Las direcciones de los tokens sean diferentes.
     * - No exista previamente un Orderbook para el par de tokens.
     *
     * Emite el evento NewPair tras la creación exitosa.
     */
    function addPair(address _token1, address _token2) external onlyOwner {
        require(_token1 != _token2, "Los tokens deben ser diferentes");

        address tokenA;
        address tokenB;

        /* 
         * Asegura que las direcciones de los tokens estén ordenadas de forma consistente.
         * Esto evita la creación de múltiples Orderbooks para el mismo par de tokens en diferente orden.
         */
        if (_token1 < _token2) {
            tokenA = _token1;
            tokenB = _token2;
        } else {
            tokenA = _token2;
            tokenB = _token1;
        }

        // Calcula el identificador único para el par de tokens usando keccak256
        bytes32 identifier = keccak256(abi.encodePacked(tokenA, tokenB));

        // Verifica que no exista ya un Orderbook para este par de tokens
        require(orderbooks[identifier] == address(0), "El par de tokens ya existe");

        /* 
         * Crea una nueva instancia del contrato Orderbook para el par de tokens.
         * La dirección del nuevo Orderbook se almacena en el mapeo `orderbooks`.
         */
        Orderbook newOrderbook = new Orderbook(tokenA, tokenB);
        orderbooks[identifier] = address(newOrderbook);
        pairsSupported++;

        // Emite el evento NewPair con las direcciones de los tokens y el nuevo Orderbook
        emit NewPair(tokenA, tokenB, address(newOrderbook));
    }
}

