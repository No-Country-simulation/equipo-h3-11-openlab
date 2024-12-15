import React, { useState, useEffect } from "react";

type ErrorState = {
  buyPrice: string;
  buyQuantity: string;
  sellPrice: string;
  sellQuantity: string;
};

type OrderbookInteractionProps = {
  isOpen: boolean;
  onClose: () => void;
};

const OrderbookInteraction: React.FC<OrderbookInteractionProps> = ({
  isOpen,
  onClose,
}) => {
  const [buyPrice, setBuyPrice] = useState<string>("");
  const [buyQuantity, setBuyQuantity] = useState<string>("");
  const [sellPrice, setSellPrice] = useState<string>("");
  const [sellQuantity, setSellQuantity] = useState<string>("");

  const [errors, setErrors] = useState<ErrorState>({
    buyPrice: "",
    buyQuantity: "",
    sellPrice: "",
    sellQuantity: "",
  });

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

  const handleBuyTokens = () => {
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
    console.log("Comprando tokens", { buyPrice, buyQuantity });
  };

  const handleSellTokens = () => {
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
    console.log("Vendiendo tokens", { sellPrice, sellQuantity });
  };

  // Cerrar modal al hacer clic fuera de él
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
        {/* Botón de cierre */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          ✕
        </button>

        <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Libro de Ordenes
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Sección de compra */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Colocar Orden de Compra
            </h2>
            <div className="mb-4">
              <input
                type="number"
                placeholder="Precio de Compra"
                value={buyPrice}
                onChange={(e) =>
                  handleInputChange(e.target.value, setBuyPrice, "buyPrice")
                }
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.buyPrice && (
                <p className="text-sm text-red-500 mt-1">{errors.buyPrice}</p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="number"
                placeholder="Cantidad de Compra"
                value={buyQuantity}
                onChange={(e) =>
                  handleInputChange(
                    e.target.value,
                    setBuyQuantity,
                    "buyQuantity"
                  )
                }
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.buyQuantity && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.buyQuantity}
                </p>
              )}
            </div>
            <button
              onClick={handleBuyTokens}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Comprar Tokens
            </button>
          </div>

          {/* Sección de venta */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Colocar Orden de Venta
            </h2>
            <div className="mb-4">
              <input
                type="number"
                placeholder="Precio de Venta"
                value={sellPrice}
                onChange={(e) =>
                  handleInputChange(e.target.value, setSellPrice, "sellPrice")
                }
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              {errors.sellPrice && (
                <p className="text-sm text-red-500 mt-1">{errors.sellPrice}</p>
              )}
            </div>
            <div className="mb-4">
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
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              {errors.sellQuantity && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.sellQuantity}
                </p>
              )}
            </div>
            <button
              onClick={handleSellTokens}
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
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
