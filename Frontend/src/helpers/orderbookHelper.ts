import { ethers } from "ethers";
import { ABIs } from "../utils/abi"; // Importa los ABI desde el archivo abi.ts

// Función para obtener la instancia del contrato Orderbook
export const getOrderbookContract = (
  provider: ethers.providers.Provider,
  orderbookAddress: string
) => {
  return new ethers.Contract(orderbookAddress, ABIs.Orderbook, provider);
};

// Función para colocar una orden de compra
export const placeBuyOrder = async (
  orderbookAddress: string,
  provider: ethers.providers.Provider,
  price: ethers.BigNumber,
  quantity: ethers.BigNumber
) => {
  try {
    // if (!signer || !signer.provider) {
    //   console.error("El signer o su provider no están disponibles.");
    //   return; // Salimos de la función o mostramos un mensaje de error
    // }
    const orderbook = getOrderbookContract(provider, orderbookAddress);
    const tx = await orderbook.placeBuy(price, quantity);
    await tx.wait(); // Espera a que la transacción se confirme
    console.log("Orden de compra colocada con éxito", tx);
  } catch (error) {
    console.error("Error al colocar la orden de compra:", error);
  }
};

// Función para colocar una orden de venta
export const placeSellOrder = async (
  orderbookAddress: string,
  provider: ethers.providers.Provider,
  price: ethers.BigNumber,
  quantity: ethers.BigNumber
) => {
  try {
    const orderbook = getOrderbookContract(provider, orderbookAddress);
    const tx = await orderbook.placeSell(price, quantity);
    await tx.wait(); // Espera a que la transacción se confirme
    console.log("Orden de venta colocada con éxito", tx);
  } catch (error) {
    console.error("Error al colocar la orden de venta:", error);
  }
};

// Función para obtener la cantidad de órdenes de compra
export const getBuyCount = async (
  orderbookAddress: string,
  provider: ethers.providers.Provider
) => {
  const orderbook = getOrderbookContract(provider, orderbookAddress);
  const count = await orderbook.buyCount();
  return count.toNumber(); // Devuelve el número de órdenes de compra
};

// Función para obtener la cantidad de órdenes de venta
export const getSellCount = async (
  orderbookAddress: string,
  provider: ethers.providers.Provider
) => {
  const orderbook = getOrderbookContract(provider, orderbookAddress);
  const count = await orderbook.sellCount();
  return count.toNumber(); // Devuelve el número de órdenes de venta
};
