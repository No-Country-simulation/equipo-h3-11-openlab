//script de hardhat
const hre = require("hardhat");

async function main() {
  // Compilar contratos si no están ya compilados
  await hre.run("compile");

  // Despliega OrderbookFactory
  const OrderbookFactory = await hre.ethers.getContractFactory(
    "OrderbookFactory"
  );
  const orderbookFactory = await OrderbookFactory.deploy();
  await orderbookFactory.deployed();
  console.log("OrderbookFactory desplegado en:", orderbookFactory.address);

  // Despliega Token1
  const Token1 = await hre.ethers.getContractFactory("Token1");
  const token1 = await Token1.deploy();
  await token1.deployed();
  console.log("Token1 desplegado en:", token1.address);

  // Despliega Token2
  const Token2 = await hre.ethers.getContractFactory("Token2");
  const token2 = await Token2.deploy();
  await token2.deployed();
  console.log("Token2 desplegado en:", token2.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
