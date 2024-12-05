// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/// @title TokenFactory
/// @dev Fábrica para crear nuevos tokens ERC20
contract TokenFactory {

    // Evento que se emite cuando se crea un nuevo token
    event TokenCreated(address tokenAddress, string name, string symbol);

    /// @dev Crea un nuevo token ERC20
    /// @param _name Nombre del token
    /// @param _symbol Símbolo del token
    /// @param _initialSupply Suministro inicial de tokens
    function createToken(string memory _name, string memory _symbol, uint256 _initialSupply) external returns (address) {
        ERC20Dynamic newToken = new ERC20Dynamic(_name, _symbol);
        newToken.mint(msg.sender, _initialSupply * 10 ** 18); // Mint inicial

        // Emitir evento de creación de token
        emit TokenCreated(address(newToken), _name, _symbol);

        return address(newToken);
    }
}

/// @title ERC20Dynamic
/// @dev Contrato ERC20 dinámico que se puede crear desde la fábrica
contract ERC20Dynamic is ERC20 {

    constructor(string memory name, string memory symbol) ERC20(name, symbol) {}

    // Función pública que permite la creación de tokens
    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}
