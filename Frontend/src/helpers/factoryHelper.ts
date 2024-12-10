import { ethers } from "ethers";
import { ABIs } from "../utils/abi";

export const getFactoryContract = (
  factoryAddress: string,
  signerOrProvider: ethers.Signer | ethers.providers.Provider
) => {
  return new ethers.Contract(
    factoryAddress,
    ABIs.OrderbookFactory,
    signerOrProvider
  );
};

export const createOrderbook = async (
  factoryAddress: string,
  signer: ethers.Signer,
  token1: string,
  token2: string
) => {
  const contract = getFactoryContract(factoryAddress, signer);
  const tx = await contract.addPair(token1, token2);
  await tx.wait();
  return tx;
};

export const getOrderbookAddress = async (
  factoryAddress: string,
  provider: ethers.providers.Provider,
  token1: string,
  token2: string
) => {
  const contract = getFactoryContract(factoryAddress, provider);
  const identifier = ethers.utils.keccak256(
    ethers.utils.defaultAbiCoder.encode(
      ["address", "address"],
      [token1, token2]
    )
  );
  return await contract.orderbooks(identifier);
};

export const listenNewPair = (
  contract: ethers.Contract,
  callback: (token1: string, token2: string, orderbook: string) => void
): void => {
  contract.on("NewPair", (token1, token2, orderbook) => {
    callback(token1, token2, orderbook);
  });
};

export const getPairsSupported = async (
  contract: ethers.Contract
): Promise<number> => {
  return await contract.pairsSupported();
};
