import OrderbookFactoryABI from "./abi/OrderbookFactory.json";
import OrderbookABI from "./abi/Orderbook.json";
import BaseTokenABI from "./abi/BaseToken.json";
import TokenFactoryABI from "./abi/TokenFactory.json";
import ERC20DynamicABI from "./abi/ERC20Dynamic.json";

export const ABIs = {
  OrderbookFactory: OrderbookFactoryABI.abi,
  Orderbook: OrderbookABI.abi,
  BaseToken: BaseTokenABI.abi,
  TokenFactory: TokenFactoryABI.abi,
  ERC20Dynamic: ERC20DynamicABI.abi,
};
