import { ethers } from "ethers";
import { ABIs } from "../utils/abi";
import { CONTRACTS } from "../utils/constants";

/**
 * Inicializa una instancia del contrato TokenFactory
 * @param {ethers.Signer | ethers.providers.Provider} provider - Proveedor o signer para interactuar con el contrato
 * @returns {ethers.Contract} Instancia del contrato
 */
export const getTokenFactoryContract = (signer: ethers.Signer) => {
  if (!CONTRACTS.tokenFactory) {
    throw new Error(
      "La dirección del contrato TokenFactory no está configurada."
    );
  }
  return new ethers.Contract(CONTRACTS.tokenFactory, ABIs.TokenFactory, signer);
};

/**
 * Despliega un nuevo token desde la fábrica
 * @param {ethers.Signer} signer - Signer para realizar la transacción
 * @param {string} name - Nombre del nuevo token
 * @param {string} symbol - Símbolo del nuevo token
 * @param {number} initialSupply - Suministro inicial del nuevo token
 * @returns {Promise<string>} Dirección del nuevo token desplegado
 */
export const createToken = async (
  signer: ethers.Signer,
  name: string,
  symbol: string,
  initialSupply: number
) => {
  const tokenFactory = getTokenFactoryContract(signer);
  const tx = await tokenFactory.createToken(name, symbol, initialSupply);
  const receipt = await tx.wait();

  const event = receipt.events?.find(
    (e: ethers.Event) => e.event === "TokenCreated"
  );

  if (!event) {
    throw new Error("No se encontró el evento TokenCreated.");
  }

  // Ahora puedes acceder a `event.args` de manera segura
  const tokenAddress = event.args?.[0] as string; // Si estás seguro de que es un string
  return tokenAddress;
};

/**
 * Crea una instancia de un token dinámico (ERC20Dynamic)
 * @param {string} address - Dirección del contrato del token
 * @param {ethers.Signer | ethers.providers.Provider} provider - Proveedor o signer para interactuar con el contrato
 * @returns {ethers.Contract} Instancia del contrato ERC20Dynamic
 */
export const getERC20DynamicContract = (
  address: string,
  signer: ethers.Signer
) => {
  return new ethers.Contract(address, ABIs.ERC20Dynamic, signer);
};

/**
 * Mintea nuevos tokens a una dirección específica
 * @param {ethers.Signer} signer - Signer para realizar la transacción
 * @param {string} tokenAddress - Dirección del token ERC20Dynamic
 * @param {string} recipient - Dirección que recibirá los tokens
 * @param {number} amount - Cantidad de tokens a mintear
 * @returns {Promise<void>}
 */
export const mintTokens = async (
  signer: ethers.Signer,
  tokenAddress: string,
  recipient: string,
  amount: number
) => {
  const token = getERC20DynamicContract(tokenAddress, signer);
  const tx = await token.mint(recipient, amount);
  await tx.wait();
};
