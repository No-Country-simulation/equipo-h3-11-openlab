// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

// Este contrato representa un libro de órdenes (Orderbook) con listas de compra (buy) y venta (sell).
contract Orderbook is ReentrancyGuard {
    // Tokens utilizados en el par de trading
    IERC20 private _token1;
    IERC20 private _token2;

    // Estructura que define una orden
    struct Order {
        uint256 price; // Precio de la orden
        uint256 quantity; // Cantidad de tokens
        uint256 date; // Fecha en que se creó la orden
    }

    // Mapeos para órdenes de compra y sus relaciones en el libro de órdenes
    mapping(address => Order) private _buyOrders;
    mapping(address => address) private _nextBuy;
    uint256 public buyCount;

    // Mapeos para órdenes de venta y sus relaciones en el libro de órdenes
    mapping(address => Order) private _sellOrders;
    mapping(address => address) private _nextSell;
    uint256 public sellCount;

    // Dirección especial utilizada como "buffer" para señalizar el inicio y fin
    address private constant BUFFER = address(1);

    // Eventos para registrar acciones
    event BuyOrderPlaced(uint256 indexed price, uint256 quantity, address indexed buyer);
    event CancelBuyOrder(address indexed buyer);
    event SellOrderPlaced(uint256 indexed price, uint256 quantity, address indexed seller);
    event CancelSellOrder(address indexed seller);

    // Constructor para inicializar los tokens y configuraciones iniciales
    constructor(address token1, address token2) {
    require(token1 != address(0) && token2 != address(0), "Tokens no validos");
    _token1 = IERC20(token1);
    _token2 = IERC20(token2);


        // Configuración inicial de los "buffers"
        _nextBuy[BUFFER] = BUFFER;
        _nextSell[BUFFER] = BUFFER;
    }

    // Función para colocar una orden de compra
    function placeBuy(uint256 price, uint256 quantity) external nonReentrant {
        require(price > 0 && quantity > 0, "Precio y cantidad deben ser mayores a cero");
        require(_buyOrders[msg.sender].date == 0, "Primero elimina tu orden existente");

        // Crear y agregar la nueva orden al libro
        _buyOrders[msg.sender] = Order(price, quantity, block.timestamp);
        address prev = _findPrevBuy(price);
        _nextBuy[msg.sender] = _nextBuy[prev];
        _nextBuy[prev] = msg.sender;
        buyCount++;

        // Transferir tokens como colateral
        _token1.transferFrom(msg.sender, address(this), quantity);

        // Emitir evento
        emit BuyOrderPlaced(price, quantity, msg.sender);
    }

    // Función para cancelar una orden de compra
    function cancelBuy() external nonReentrant {
        require(_buyOrders[msg.sender].date != 0, "No tienes ordenes de compra");

        // Recuperar datos de la orden y limpiar
        uint256 quantity = _buyOrders[msg.sender].quantity;
        address prev = _getPreviousBuy(msg.sender);
        _nextBuy[prev] = _nextBuy[msg.sender];
        delete _nextBuy[msg.sender];
        delete _buyOrders[msg.sender];
        buyCount--;

        // Retornar los tokens al usuario
        _token1.transfer(msg.sender, quantity);

        // Emitir evento
        emit CancelBuyOrder(msg.sender);
    }

    // Función para colocar una orden de venta
    function placeSell(uint256 price, uint256 quantity) external nonReentrant {
        require(price > 0 && quantity > 0, "Precio y cantidad deben ser mayores a cero");
        require(_sellOrders[msg.sender].date == 0, "Primero elimina tu orden existente");

        // Crear y agregar la nueva orden al libro
        _sellOrders[msg.sender] = Order(price, quantity, block.timestamp);
        address prev = _findPrevSell(price);
        _nextSell[msg.sender] = _nextSell[prev];
        _nextSell[prev] = msg.sender;
        sellCount++;

        // Transferir tokens como colateral
        _token2.transferFrom(msg.sender, address(this), quantity);

        // Emitir evento
        emit SellOrderPlaced(price, quantity, msg.sender);
    }

    // Función para cancelar una orden de venta
    function cancelSell() external nonReentrant {
        require(_sellOrders[msg.sender].date != 0, "No tienes ordenes de venta");

        // Recuperar datos de la orden y limpiar
        uint256 quantity = _sellOrders[msg.sender].quantity;
        address prev = _getPreviousSell(msg.sender);
        _nextSell[prev] = _nextSell[msg.sender];
        delete _nextSell[msg.sender];
        delete _sellOrders[msg.sender];
        sellCount--;

        // Retornar los tokens al usuario
        _token2.transfer(msg.sender, quantity);

        // Emitir evento
        emit CancelSellOrder(msg.sender);
    }

    // Función auxiliar para encontrar la posición previa en las órdenes de compra
    function _findPrevBuy(uint256 price) private view returns (address) {
        address prev = BUFFER;
        while (_nextBuy[prev] != BUFFER && _buyOrders[_nextBuy[prev]].price > price) {
            prev = _nextBuy[prev];
        }
        return prev;
    }

    // Función auxiliar para encontrar la posición previa en las órdenes de venta
    function _findPrevSell(uint256 price) private view returns (address) {
        address prev = BUFFER;
        while (_nextSell[prev] != BUFFER && _sellOrders[_nextSell[prev]].price < price) {
            prev = _nextSell[prev];
        }
        return prev;
    }

    // Función para obtener la dirección previa en las órdenes de compra
    function _getPreviousBuy(address target) private view returns (address) {
        address current = BUFFER;
        while (_nextBuy[current] != BUFFER) {
            if (_nextBuy[current] == target) return current;
            current = _nextBuy[current];
        }
        return address(0);
    }

    // Función para obtener la dirección previa en las órdenes de venta
    function _getPreviousSell(address target) private view returns (address) {
        address current = BUFFER;
        while (_nextSell[current] != BUFFER) {
            if (_nextSell[current] == target) return current;
            current = _nextSell[current];
        }
        return address(0);
    }
}
