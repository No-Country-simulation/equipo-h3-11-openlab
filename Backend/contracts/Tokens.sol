// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/// @title BaseToken
/// @dev Contrato base para tokens con funcionalidades comunes
abstract contract BaseToken is ERC20 {
    address public admin;

    

    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        admin = msg.sender;
        _mint(msg.sender, 1000); // Emite tokens iniciales al deployer
    }

    /// @notice Función para mintear nuevos tokens
    /// @dev Solo el administrador puede ejecutar esta función
    /// @param _to Dirección receptora de los tokens
    /// @param _amount Cantidad de tokens a mintear
    function mint(address _to, uint256 _amount) external {
        require(msg.sender == admin, "Only admin can mint");
        _mint(_to, _amount);
    }
}

/// @title Token1
contract Token1 is BaseToken {
    constructor() BaseToken("TOKEN1", "TK1") {}
}

/// @title Token2
contract Token2 is BaseToken {
    constructor() BaseToken("TOKEN2", "TK2") {}
}

