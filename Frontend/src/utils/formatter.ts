import { ethers } from "ethers";

export const formatTokenAmount = (
  amount: ethers.BigNumber,
  decimals: number = 18
): string => {
  return ethers.utils.formatUnits(amount, decimals);
};

// Función para formatear la entrada del usuario (convertir de string/number a BigNumber)
export const formatTokenInput = (
  value: string | number,
  decimals: number = 18
): ethers.BigNumber => {
  const parsedValue = ethers.utils.parseUnits(value.toString(), decimals);
  return parsedValue;
};
