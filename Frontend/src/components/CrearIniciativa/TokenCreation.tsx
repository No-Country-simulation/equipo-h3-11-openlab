import React, { useState } from "react";
import { useWallet } from "../../context/WalletContext";
import { ethers } from "ethers";
import { CONTRACTS } from "../../utils/constants";
import { ABIs } from "../../utils/abi";

interface TokenCreationProps {
  onTokenCreated: (address: string) => void;
}

const TokenCreation: React.FC<TokenCreationProps> = ({ onTokenCreated }) => {
  const { signer } = useWallet();
  const [formData, setFormData] = useState({
    tokenName: "",
    tokenSymbol: "",
    initialSupply: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [loading, setLoading] = useState(false);

  const handleCreateToken = async () => {
    if (!signer) {
      alert("Por favor, conecta tu wallet antes de continuar.");
      return;
    }

    setLoading(true);
    try {
      const tokenFactory = new ethers.Contract(
        CONTRACTS.tokenFactory,
        ABIs.TokenFactory,
        signer
      );

      const tx = await tokenFactory.createToken(
        formData.tokenName,
        formData.tokenSymbol,
        ethers.utils.parseUnits(formData.initialSupply, 18)
      );
      const receipt = await tx.wait();

      const event = receipt.events?.find(
        (e: ethers.Event) => e.event === "TokenCreated"
      );
      if (!event) throw new Error("No se encontró el evento TokenCreated.");

      const tokenAddress = event.args?.[0];
      onTokenCreated(tokenAddress);
      alert(`Token creado con éxito: ${tokenAddress}`);

      setFormData({ tokenName: "", tokenSymbol: "", initialSupply: "" });
    } catch (error) {
      console.error("Error al crear el token:", error);
      alert("Error al crear el token.");
    } finally {
      setLoading(false);
    }
  };

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

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-4">Crear Token</h1>
      <form onSubmit={handleCreateToken}>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Nombre del Token
          </label>
          <input
            type="text"
            name="tokenName"
            value={formData.tokenName}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
          {errors.tokenName && (
            <p className="text-red-500 text-sm">{errors.tokenName}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Símbolo del Token
          </label>
          <input
            type="text"
            name="tokenSymbol"
            value={formData.tokenSymbol}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
          {errors.tokenSymbol && (
            <p className="text-red-500 text-sm">{errors.tokenSymbol}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Suministro Inicial
          </label>
          <input
            type="number"
            name="initialSupply"
            value={formData.initialSupply}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
          {errors.initialSupply && (
            <p className="text-red-500 text-sm">{errors.initialSupply}</p>
          )}
        </div>
        <button
          type="submit"
          className={`w-full py-2 px-4 ${
            loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
          } text-white font-bold rounded-lg`}
          disabled={loading}
        >
          {loading ? "Creando Token..." : "Crear Token"}
        </button>
      </form>
    </div>
  );
};

export default TokenCreation;
