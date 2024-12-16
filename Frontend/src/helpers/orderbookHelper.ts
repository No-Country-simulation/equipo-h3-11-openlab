import { ethers } from "ethers";
import { ABIs } from "../utils/abi"; // Importa los ABI desde el archivo abi.ts

// Función para obtener la instancia del contrato Orderbook
export const getOrderbookContract = (
  signer: ethers.Signer, // Asegúrate de que sea un Signer
  orderbookAddress: string
) => {
  return new ethers.Contract(orderbookAddress, ABIs.Orderbook, signer);
};

// Función para colocar una orden de compra
export const placeBuyOrder = async (
  orderbookAddress: string,
  signer: ethers.Signer, // Asegúrate de que sea un Signer
  price: ethers.BigNumber,
  quantity: ethers.BigNumber
) => {
  try {
    const orderbook = getOrderbookContract(signer, orderbookAddress);
    const tx = await orderbook.placeBuy(price, quantity);
    await tx.wait(); // Espera a que la transacción se confirme
    console.log("Orden de compra colocada con éxito:", tx.hash);

    // Espera el evento BuyOrderPlaced
    orderbook.on("BuyOrderPlaced", (price, quantity, buyer, timestamp) => {
      console.log("Evento BuyOrderPlaced recibido:", {
        price: ethers.utils.formatUnits(price, 18),
        quantity: ethers.utils.formatUnits(quantity, 18),
        buyer,
        timestamp: new Date(timestamp.toNumber() * 1000).toLocaleString(), // Convertimos el timestamp a formato legible
      });
    });
  } catch (error) {
    console.error("Error al colocar la orden de compra:", error);
  }
};

// Función para colocar una orden de venta
export const placeSellOrder = async (
  orderbookAddress: string,
  signer: ethers.Signer, // Asegúrate de que sea un Signer
  price: ethers.BigNumber,
  quantity: ethers.BigNumber
) => {
  try {
    const orderbook = getOrderbookContract(signer, orderbookAddress);
    const tx = await orderbook.placeSell(price, quantity);
    await tx.wait(); // Espera a que la transacción se confirme
    console.log("Orden de venta colocada con éxito:", tx.hash);

    // Espera el evento SellOrderPlaced
    orderbook.on("SellOrderPlaced", (price, quantity, seller, timestamp) => {
      console.log("Evento SellOrderPlaced recibido:", {
        price: ethers.utils.formatUnits(price, 18),
        quantity: ethers.utils.formatUnits(quantity, 18),
        seller,
        timestamp: new Date(timestamp.toNumber() * 1000).toLocaleString(), // Convertimos el timestamp a formato legible
      });
    });
  } catch (error) {
    console.error("Error al colocar la orden de venta:", error);
  }
};

// Función para cancelar una orden de compra
export const cancelBuyOrder = async (
  orderbookAddress: string,
  signer: ethers.Signer // Asegúrate de que sea un Signer
) => {
  try {
    const orderbook = getOrderbookContract(signer, orderbookAddress);
    const tx = await orderbook.cancelBuy();
    await tx.wait(); // Espera a que la transacción se confirme
    console.log("Orden de compra cancelada con éxito:", tx.hash);
  } catch (error) {
    console.error("Error al cancelar la orden de compra:", error);
  }
};

// Función para cancelar una orden de venta
export const cancelSellOrder = async (
  orderbookAddress: string,
  signer: ethers.Signer // Asegúrate de que sea un Signer
) => {
  try {
    const orderbook = getOrderbookContract(signer, orderbookAddress);
    const tx = await orderbook.cancelSell();
    await tx.wait(); // Espera a que la transacción se confirme
    console.log("Orden de venta cancelada con éxito:", tx.hash);
  } catch (error) {
    console.error("Error al cancelar la orden de venta:", error);
  }
};

// Función para obtener la cantidad de órdenes de compra
export const getBuyCount = async (
  orderbookAddress: string,
  signer: ethers.Signer // Asegúrate de que sea un Signer
) => {
  try {
    const orderbook = getOrderbookContract(signer, orderbookAddress);
    const count = await orderbook.buyCount();
    console.log("Número de órdenes de compra activas:", count.toNumber());
    return count.toNumber(); // Devuelve el número de órdenes de compra
  } catch (error) {
    console.error("Error al obtener el número de órdenes de compra:", error);
    throw error;
  }
};

// Función para obtener la cantidad de órdenes de venta
export const getSellCount = async (
  orderbookAddress: string,
  signer: ethers.Signer // Asegúrate de que sea un Signer
) => {
  try {
    const orderbook = getOrderbookContract(signer, orderbookAddress);
    const count = await orderbook.sellCount();
    console.log("Número de órdenes de venta activas:", count.toNumber());
    return count.toNumber(); // Devuelve el número de órdenes de venta
  } catch (error) {
    console.error("Error al obtener el número de órdenes de venta:", error);
    throw error;
  }
};
