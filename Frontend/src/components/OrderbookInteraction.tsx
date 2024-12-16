import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { useWallet } from "../context/WalletContext";
//import { CONTRACTS } from "../utils/constants";
import { placeBuyOrder, placeSellOrder } from "../helpers/orderbookHelper";
import { DataRow } from "./Initiatives/DataTable";
import { ABIs } from "../utils/abi";

type ErrorState = {
  buyPrice: string;
  buyQuantity: string;
  sellPrice: string;
  sellQuantity: string;
};

interface OrderbookInteractionProps {
  isOpen: boolean;
  onClose: () => void;
  rowData: DataRow;
}

const OrderbookInteraction: React.FC<OrderbookInteractionProps> = ({
  isOpen,
  onClose,
  rowData,
}) => {
  const [buyPrice, setBuyPrice] = useState<string>("");
  const [buyQuantity, setBuyQuantity] = useState<string>("");
  const [sellPrice, setSellPrice] = useState<string>("");
  const [sellQuantity, setSellQuantity] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // Estado para cargar
  const [errors, setErrors] = useState<ErrorState>({
    buyPrice: "",
    buyQuantity: "",
    sellPrice: "",
    sellQuantity: "",
  });

  const { signer } = useWallet();
  // const factoryAddress = CONTRACTS.factory;
  const token1 = rowData.token1;
  // const token2 = rowData.token2;
  const orderbook = rowData.orderbook;

  // Validar los inputs
  const validateInput = (value: string, field: string): string => {
    let error = "";
    if (!value || parseFloat(value) <= 0) {
      error = `${field} debe ser un número positivo.`;
    }
    return error;
  };

  const handleInputChange = (
    value: string,
    setter: React.Dispatch<React.SetStateAction<string>>,
    field: keyof ErrorState
  ) => {
    setter(value);
    setErrors((prev) => ({ ...prev, [field]: validateInput(value, field) }));
  };

  const resetForm = () => {
    setBuyPrice("");
    setBuyQuantity("");
    setSellPrice("");
    setSellQuantity("");
    setErrors({
      buyPrice: "",
      buyQuantity: "",
      sellPrice: "",
      sellQuantity: "",
    });
  };

  const handleBuyTokens = async () => {
    if (!signer || !signer.provider) {
      alert("Wallet no conectada; por favor conecta tu wallet.");
      return;
    }

    console.log("Signer disponible:", signer);

    const buyPriceError = validateInput(buyPrice, "Precio de Compra");
    const buyQuantityError = validateInput(buyQuantity, "Cantidad de Compra");

    if (buyPriceError || buyQuantityError) {
      setErrors((prev) => ({
        ...prev,
        buyPrice: buyPriceError,
        buyQuantity: buyQuantityError,
      }));
      return;
    }

    if (orderbook) {
      const price = ethers.utils.parseUnits(buyPrice, 18);
      const quantity = ethers.utils.parseUnits(buyQuantity, 18);
      const walletAddress = await signer.getAddress();

      // Verificación de la aprobación de tokens antes de proceder con la compra
      const tokenContract = new ethers.Contract(
        token1,
        ABIs.ERC20Dynamic,
        signer
      );
      const allowance = await tokenContract.allowance(walletAddress, token1);

      if (allowance.lt(quantity)) {
        // Si la cantidad de tokens permitidos es menor que la cantidad que intentas usar
        try {
          console.log(
            "No hay suficiente aprobación, procediendo a aprobar la cantidad..."
          );
          const approveTx = await tokenContract.approve(token1, quantity);
          await approveTx.wait(); // Espera la transacción de aprobación
          console.log("Aprobación completada.");
        } catch (error) {
          console.error("Error al aprobar los tokens:", error);
          return;
        }
      }

      setLoading(true); // Activar loading

      try {
        await placeBuyOrder(orderbook, signer, price, quantity);
        setSuccessMessage("Orden de compra realizada con éxito.");
        resetForm();
      } catch (error) {
        console.error("Error al colocar la orden de compra:", error);
      } finally {
        setLoading(false); // Desactivar loading
        setTimeout(() => {
          setSuccessMessage(null);
          onClose();
        }, 2000);
      }
    } else {
      console.error("No se ha encontrado la dirección del libro de órdenes.");
    }
  };

  const handleSellTokens = async () => {
    if (!signer || !signer.provider) {
      console.error("Signer no está disponible.");
      return;
    }

    const sellPriceError = validateInput(sellPrice, "Precio de Venta");
    const sellQuantityError = validateInput(sellQuantity, "Cantidad de Venta");

    if (sellPriceError || sellQuantityError) {
      setErrors((prev) => ({
        ...prev,
        sellPrice: sellPriceError,
        sellQuantity: sellQuantityError,
      }));
      return;
    }

    if (orderbook) {
      const price = ethers.utils.parseUnits(sellPrice, 18);
      const quantity = ethers.utils.parseUnits(sellQuantity, 18);
      const walletAddress = await signer.getAddress();

      // Verificación de la aprobación de tokens antes de proceder con la venta
      const tokenContract = new ethers.Contract(
        token1,
        ABIs.ERC20Dynamic,
        signer
      );
      const allowance = await tokenContract.allowance(walletAddress, token1);

      if (allowance.lt(quantity)) {
        // Si la cantidad de tokens permitidos es menor que la cantidad que intentas usar
        try {
          console.log(
            "No hay suficiente aprobación, procediendo a aprobar la cantidad..."
          );
          const approveTx = await tokenContract.approve(token1, quantity);
          await approveTx.wait(); // Espera la transacción de aprobación
          console.log("Aprobación completada.");
        } catch (error) {
          console.error("Error al aprobar los tokens:", error);
          return;
        }
      }

      setLoading(true); // Activar loading

      try {
        await placeSellOrder(orderbook, signer, price, quantity);
        setSuccessMessage("Orden de venta realizada con éxito.");
        resetForm();
      } catch (error) {
        console.error("Error al colocar la orden de venta:", error);
      } finally {
        setLoading(false); // Desactivar loading
        setTimeout(() => {
          setSuccessMessage(null);
          onClose();
        }, 3000);
      }
    } else {
      console.error("No se ha encontrado la dirección del libro de órdenes.");
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.id === "orderbook-modal") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="orderbook-modal"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-2xl p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          ✕
        </button>

        <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Libro de Ordenes
        </h1>

        {successMessage && (
          <div className="mb-4 text-green-600 font-medium text-center">
            {successMessage}
          </div>
        )}

        {loading && (
          <div className="text-center text-blue-600 font-semibold">
            Procesando transacción...
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          {/* Sección de compra */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Colocar Orden de Compra
            </h2>
            <input
              type="number"
              placeholder="Precio de Compra"
              value={buyPrice}
              onChange={(e) =>
                handleInputChange(e.target.value, setBuyPrice, "buyPrice")
              }
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            {errors.buyPrice && (
              <p className="text-sm text-red-500 mt-1">{errors.buyPrice}</p>
            )}
            <input
              type="number"
              placeholder="Cantidad de Compra"
              value={buyQuantity}
              onChange={(e) =>
                handleInputChange(e.target.value, setBuyQuantity, "buyQuantity")
              }
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            {errors.buyQuantity && (
              <p className="text-sm text-red-500 mt-1">{errors.buyQuantity}</p>
            )}
            <button
              onClick={handleBuyTokens}
              className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4"
              disabled={loading}
            >
              Comprar Tokens
            </button>
          </div>

          {/* Sección de venta */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Colocar Orden de Venta
            </h2>
            <input
              type="number"
              placeholder="Precio de Venta"
              value={sellPrice}
              onChange={(e) =>
                handleInputChange(e.target.value, setSellPrice, "sellPrice")
              }
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            {errors.sellPrice && (
              <p className="text-sm text-red-500 mt-1">{errors.sellPrice}</p>
            )}
            <input
              type="number"
              placeholder="Cantidad de Venta"
              value={sellQuantity}
              onChange={(e) =>
                handleInputChange(
                  e.target.value,
                  setSellQuantity,
                  "sellQuantity"
                )
              }
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            {errors.sellQuantity && (
              <p className="text-sm text-red-500 mt-1">{errors.sellQuantity}</p>
            )}
            <button
              onClick={handleSellTokens}
              className="w-full bg-red-500 text-white py-2 rounded-lg mt-4"
              disabled={loading}
            >
              Vender Tokens
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderbookInteraction;
