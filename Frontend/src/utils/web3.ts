import { ethers } from "ethers";
import { RPC_URL } from "./constants";

export const getProvider = () => new ethers.providers.JsonRpcProvider(RPC_URL);

export const getContract = (
  address: string,
  abi: string,
  signer?: ethers.Signer
) => {
  const provider = signer || getProvider();
  return new ethers.Contract(address, abi, provider);
};
