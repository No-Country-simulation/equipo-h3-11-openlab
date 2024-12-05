import React, { useState } from "react";

const OrderbookInteraction = () => {
  const [buyPrice, setBuyPrice] = useState("");
  const [buyQuantity, setBuyQuantity] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [sellQuantity, setSellQuantity] = useState("");

  const [errors, setErrors] = useState({
    buyPrice: "",
    buyQuantity: "",
    sellPrice: "",
    sellQuantity: "",
  });

  const validateInput = (value: string, field: string) => {
    let error = "";
    if (!value || parseFloat(value) <= 0) {
      error = `${field} debe ser un número positivo.`;
    }
    return error;
  };

  const handleInputChange = (
    value: string,
    setter: React.Dispatch<React.SetStateAction<string>>,
    field: string
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

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Interacción con Orderbook
      </h1>
      <div className="grid gap-6 md:grid-cols-2">
        {/* Sección de compra */}
        <div className="bg-white p-4 rounded-lg shadow-md">
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
                handleInputChange(e.target.value, setBuyQuantity, "buyQuantity")
              }
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.buyQuantity && (
              <p className="text-sm text-red-500 mt-1">{errors.buyQuantity}</p>
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
        <div className="bg-white p-4 rounded-lg shadow-md">
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
              <p className="text-sm text-red-500 mt-1">{errors.sellQuantity}</p>
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
      <div className="mt-8 text-center">
        <button
          onClick={() => console.log("Abriendo modal")}
          className="bg-gray-800 text-white py-2 px-6 rounded-lg hover:bg-gray-900 transition"
        >
          Emitir Orden
        </button>
      </div>
    </div>
  );
};

export default OrderbookInteraction;
