import React, { useState } from "react";
import { useWallet } from "../../context/WalletContext";
import {
  createOrderbook,
  //getOrderbookAddress,
} from "../../helpers/factoryHelper";
import { CONTRACTS } from "../../utils/constants";
import { ethers } from "ethers";
import { useExampleData } from "../../context/ExampleDataContext";

interface IniciativeCreationProps {
  createdTokenAddress: string | null;
  onClose: () => void;
}

const IniciativeCreation: React.FC<IniciativeCreationProps> = ({
  createdTokenAddress,
  onClose,
}) => {
  const { signer } = useWallet();
  const { addData } = useExampleData(); // Acceder a la función para agregar iniciativas
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [loading, setLoading] = useState(false);

  // const [orderbookAddress, setOrderbookAddress] = useState<string | null>(null);

  const token1Address = CONTRACTS.token1;

  const validateField = (name: string, value: string): string => {
    if (!value.trim()) return `El campo ${name} es obligatorio.`;
    if (name === "initialSupply" && isNaN(Number(value))) {
      return "El suministro inicial debe ser un número.";
    }
    return "";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleCreateIniciative = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors: { [key: string]: string } = {};
    ["name", "description"].forEach((key) => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) validationErrors[key] = error;
    });
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      alert("Corrige los errores antes de crear la DAO.");
      return;
    }

    if (!signer) {
      alert("Por favor, conecta tu wallet antes de continuar.");
      return;
    }

    setLoading(true);
    try {
      const factoryAddress = CONTRACTS.factory;

      // Llama a la función para crear el par en el contrato
      const tx = await createOrderbook(
        factoryAddress,
        signer,
        token1Address,
        createdTokenAddress as string
      );

      console.log("Transacción enviada:", tx.hash);

      // Esperar a que la transacción sea confirmada
      const receipt = await tx.wait();
      console.log("Transacción confirmada:", receipt.transactionHash);

      // Buscar el evento 'NewPair' en el recibo
      const event = receipt.events?.find(
        (e: ethers.Event) => e.event === "NewPair"
      );
      if (!event) throw new Error("No se encontró el evento NewPair.");

      // Extraer los argumentos del evento
      const [emittedTokenA, emittedTokenB, orderbookAddress] = event.args || [];
      console.log(`Nuevo par creado: ${emittedTokenA}, ${emittedTokenB}`);
      console.log(`Orderbook creado: ${orderbookAddress}`);

      // Realizar acciones con la dirección del orderbook
      alert(
        `Par creado con éxito: ${emittedTokenA} - ${emittedTokenB}\nOrderbook: ${orderbookAddress}`
      );

      addData({
        id: Math.floor(Math.random() * 1000), // ID único para la nueva iniciativa
        name: formData.name,
        priceFluctation: "",
        collaborators: 0,
        marketPrices: "0/0",
        tokens: "0k/0",
        missions: "0/0",
        likes: 0,
        shares: 0,
        init: new Date().toLocaleDateString(),
        token1: token1Address,
        token2: createdTokenAddress!,
        orderbook: orderbookAddress, // Dirección del orderbook obtenido del evento
      });

      alert(`DAO creada exitosamente con Orderbook: ${orderbookAddress}`);
      setLoading(false);
      setFormData({
        name: "",
        description: "",
      });
      onClose();
    } catch (error: unknown) {
      console.error("Error al crear la DAO:", error);
      alert(
        `Error al crear la DAO: ${
          error instanceof Error ? error.message : "Error desconocido."
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleCreateIniciative}>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Nombre de la Iniciativa
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Descripción
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description}</p>
          )}
        </div>

        <button
          type="submit"
          className={`w-full py-2 px-4 ${
            loading ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
          } text-white font-bold rounded-lg}
                  disabled={loading`}
        >
          {loading ? "Creando Iniciativa..." : "Crear Iniciativa"}
        </button>
      </form>
    </div>
  );
};

export default IniciativeCreation;
