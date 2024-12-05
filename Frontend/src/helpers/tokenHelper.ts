import { ethers } from "ethers";
import { ABIs } from "../utils/abi"; // Reemplaza con ERC20.json o el ABI que uses

export const getTokenContract = (
  address: string,
  provider: ethers.providers.Provider | ethers.Signer
) => {
  if (!address) throw new Error("La dirección del contrato es requerida.");
  return new ethers.Contract(address, ABIs.BaseToken, provider);
};

export const getBalanceOf = async (
  contractAddress: string,
  userAddress: string,
  provider: ethers.providers.Provider | ethers.Signer
): Promise<string> => {
  const tokenContract = getTokenContract(contractAddress, provider);
  const balance = await tokenContract.balanceOf(userAddress);
  return ethers.utils.formatUnits(balance, 18); // Asegúrate de ajustar los decimales según el token
};

export const transferTokens = async (
  contractAddress: string,
  recipientAddress: string,
  amount: ethers.BigNumber,
  signer: ethers.Signer
): Promise<ethers.providers.TransactionResponse> => {
  const tokenContract = getTokenContract(contractAddress, signer);
  return await tokenContract.transfer(recipientAddress, amount);
};
