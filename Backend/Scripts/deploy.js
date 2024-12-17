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
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
