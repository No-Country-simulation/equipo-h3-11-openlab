import React, { useState } from "react";

const TokenOrderModal = () => {
  const [orderData, setOrderData] = useState({ price: "", amount: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
  };

  const handleSubmitOrder = () => {
    // Lógica para emitir la orden en el contrato
    console.log("Orden creada:", orderData);
  };

  return (
    <div>
      <h2>Emitir Orden</h2>
      <input
        name="price"
        placeholder="Precio"
        value={orderData.price}
        onChange={handleChange}
      />
      <input
        name="amount"
        placeholder="Cantidad"
        value={orderData.amount}
        onChange={handleChange}
      />
      <button onClick={handleSubmitOrder}>Crear Orden</button>
    </div>
  );
};

export default TokenOrderModal;
