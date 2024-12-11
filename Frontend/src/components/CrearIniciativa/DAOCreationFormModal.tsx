import React, { useState, useEffect, useRef } from "react";
import { useWallet } from "../../context/WalletContext";
import { createOrderbook } from "../../helpers/factoryHelper";
import { CONTRACTS } from "../../utils/constants";
import { ethers } from "ethers";
import { ABIs } from "../../utils/abi";

interface DAOCreationFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DAOCreationFormModal: React.FC<DAOCreationFormModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { signer } = useWallet();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    tokenName: "",
    tokenSymbol: "",
    initialSupply: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [createdTokenAddress, setCreatedTokenAddress] = useState<string | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  const modalRef = useRef<HTMLDivElement | null>(null);

  // Cierra el modal cuando el usuario haga clic fuera de él
  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      // Cuando el modal se abre, agregar el evento para cerrar cuando se haga clic fuera
      document.addEventListener(
        "mousedown",
        handleOutsideClick as EventListener
      );
    } else {
      // Cuando el modal se cierra, quitar el evento
      document.removeEventListener(
        "mousedown",
        handleOutsideClick as EventListener
      );
    }

    // Limpiar el efecto cuando el modal se desmonta
    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick as EventListener
      );
    };
  }, [isOpen]);

  if (!isOpen) return null; // Si el modal no está abierto, no renderizar nada

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

  const handleCreateToken = async () => {
    const validationErrors: { [key: string]: string } = {};
    ["tokenName", "tokenSymbol", "initialSupply"].forEach((key) => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) validationErrors[key] = error;
    });
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      alert("Corrige los errores antes de crear el token.");
      return;
    }

    if (!signer) {
      alert("Por favor, conecta tu wallet antes de continuar.");
      return;
    }

    setLoading(true);
    try {
      const factoryAddress = CONTRACTS.tokenFactory;
      const tokenFactory = new ethers.Contract(
        factoryAddress,
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
      setCreatedTokenAddress(tokenAddress);

      alert(`Token creado con éxito: ${tokenAddress}`);
      setStep(2);
    } catch (error: unknown) {
      console.error("Error al crear el token:", error);
      alert(
        `Error al crear el token: ${
          error instanceof Error ? error.message : "Error desconocido."
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCreateDAO = async (e: React.FormEvent) => {
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

      await createOrderbook(
        factoryAddress,
        signer,
        token1Address,
        createdTokenAddress as string
      );
      alert(
        `DAO creada exitosamente. Par creado:\nToken1: ${token1Address}\nToken2: ${createdTokenAddress}`
      );

      setFormData({
        name: "",
        description: "",
        tokenName: "",
        tokenSymbol: "",
        initialSupply: "",
      });
      setCreatedTokenAddress(null);
      setStep(1);
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="bg-white p-8 rounded-lg shadow-lg w-96 relative"
        onClick={(e) => e.stopPropagation()} // Evita que el clic dentro del modal cierre el modal
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 ">
          <h1 className="text-2xl font-bold text-center mb-4">
            {step === 1 ? "Crear Token" : "Crear Iniciativa"}
          </h1>
          <form onSubmit={handleCreateDAO}>
            {step === 1 ? (
              <>
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
                    <p className="text-red-500 text-sm">
                      {errors.initialSupply}
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleCreateToken}
                  className={`w-full py-2 px-4 ${
                    loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
                  } text-white font-bold rounded-lg`}
                  disabled={loading}
                >
                  {loading ? "Creando Token..." : "Crear Token"}
                </button>
              </>
            ) : (
              <>
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
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
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
                  } text-white font-bold rounded-lg`}
                  disabled={loading}
                >
                  {loading ? "Creando Iniciativa..." : "Crear Iniciativa"}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
export default DAOCreationFormModal;
