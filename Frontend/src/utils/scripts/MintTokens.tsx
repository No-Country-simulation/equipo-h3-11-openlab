import React, { useState } from "react";
import { ethers } from "ethers";
import { mintTokens, approveTokens } from "../../helpers/tokenFactoryHelper";
import { useWallet } from "../../context/WalletContext";
import { toast } from "react-toastify";

const MintAndApproveTokens: React.FC = () => {
  const [formData, setFormData] = useState({
    mintAmount: "10",
    recipient: "",
    approveAmount: "",
    approveContract: "",
  });
  const [loading, setLoading] = useState(false);
  const [transactionHash, setTransactionHash] = useState<string | null>(null);

  const { signer } = useWallet();
  const tokenAddress = "0xd85d261cf44f819bC9A34445e5f370A8a89EE22d";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const validateInput = (amount: string, address?: string) => {
    if (!signer) {
      toast.error("Wallet no conectada. Por favor, conecta tu wallet.");
      return false;
    }
    if (amount && (isNaN(Number(amount)) || Number(amount) <= 0)) {
      toast.error("Por favor, introduce una cantidad válida.");
      return false;
    }
    if (address && !ethers.utils.isAddress(address)) {
      toast.error("Por favor, introduce una dirección válida.");
      return false;
    }
    return true;
  };

  const handleTransaction = async (
    transactionFn: () => Promise<any>,
    successMessage: string
  ) => {
    setLoading(true);
    setTransactionHash(null);
    try {
      const tx = await transactionFn();
      toast.info("Transacción enviada, esperando confirmación...");
      await tx.wait();
      setTransactionHash(tx.hash);
      toast.success(successMessage);
    } catch (err: any) {
      toast.error(
        `Error durante la transacción: ${err.message || "Error desconocido"}`
      );
    } finally {
      setLoading(false);
    }
  };

  const mintTokensHandler = () => {
    if (!validateInput(formData.mintAmount, formData.recipient)) return;

    handleTransaction(
      async () =>
        mintTokens(
          signer!,
          tokenAddress,
          formData.recipient,
          ethers.utils.parseUnits(formData.mintAmount, 18)
        ),
      "Tokens minteados con éxito."
    );
  };

  const approveTokensHandler = () => {
    if (!validateInput(formData.approveAmount, formData.approveContract))
      return;

    handleTransaction(
      async () =>
        approveTokens(
          signer!,
          tokenAddress,
          formData.approveContract,
          ethers.utils.parseUnits(formData.approveAmount, 18)
        ),
      "Tokens aprobados con éxito."
    );
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Mintear y Aprobar Tokens
      </h2>

      {/* Mint Section */}
      <Section
        title="Mintear Tokens"
        inputs={[
          {
            id: "recipient",
            label: "Dirección del destinatario",
            value: formData.recipient,
            placeholder: "0x... Dirección del destinatario",
          },
          {
            id: "mintAmount",
            label: "Cantidad de Tokens",
            value: formData.mintAmount,
            placeholder: "Cantidad de tokens",
          },
        ]}
        buttonText="Mintear"
        buttonDisabled={loading}
        onSubmit={mintTokensHandler}
        onInputChange={handleInputChange}
      />

      {/* Approve Section */}
      <Section
        title="Aprobar Tokens"
        inputs={[
          {
            id: "approveContract",
            label: "Dirección del contrato",
            value: formData.approveContract,
            placeholder: "0x... Dirección del contrato",
          },
          {
            id: "approveAmount",
            label: "Cantidad de Tokens",
            value: formData.approveAmount,
            placeholder: "Cantidad de tokens",
          },
        ]}
        buttonText="Aprobar"
        buttonDisabled={loading}
        onSubmit={approveTokensHandler}
        onInputChange={handleInputChange}
      />

      {/* Transaction Hash Feedback */}
      {transactionHash && (
        <div className="mt-4 text-center">
          <p className="text-green-600">
            Transacción exitosa. Ver más en{" "}
            <a
              href={`https://etherscan.io/tx/${transactionHash}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Etherscan
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

type SectionProps = {
  title: string;
  inputs: {
    id: string;
    label: string;
    value: string;
    placeholder: string;
  }[];
  buttonText: string;
  buttonDisabled: boolean;
  onSubmit: () => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Section: React.FC<SectionProps> = ({
  title,
  inputs,
  buttonText,
  buttonDisabled,
  onSubmit,
  onInputChange,
}) => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      {inputs.map((input) => (
        <div className="mb-4" key={input.id}>
          <label
            htmlFor={input.id}
            className="block text-lg font-medium text-gray-700"
          >
            {input.label}
          </label>
          <input
            type="text"
            id={input.id}
            value={input.value}
            onChange={onInputChange}
            className="w-full p-3 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder={input.placeholder}
          />
        </div>
      ))}
      <button
        onClick={onSubmit}
        disabled={buttonDisabled}
        className={`w-full p-3 mt-4 text-white rounded-md ${
          buttonDisabled
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-indigo-600 hover:bg-indigo-700"
        } focus:outline-none`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default MintAndApproveTokens;
