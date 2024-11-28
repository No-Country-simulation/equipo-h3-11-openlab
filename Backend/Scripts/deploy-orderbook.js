const hre = require("hardhat");

async function main() {
  // Obtén las direcciones de los tokens que se utilizarán en el constructor
  const token1Address = "0xd85d261cf44f819bC9A34445e5f370A8a89EE22d"; // Sustituye con la dirección del Token1
  const token2Address = "0x74d44a618b53df258a0c0e251C46FA1c3C4E82D5"; // Sustituye con la dirección del Token2

  // Obtén el contrato `OrderBook`
  const OrderBook = await hre.ethers.getContractFactory("Orderbook");

  // Despliega el contrato con los argumentos necesarios
  console.log("Desplegando OrderBook...");
  const orderbook = await OrderBook.deploy(token1Address, token2Address);

  await orderbook.deployed();

  console.log(`Contrato OrderBook desplegado en: ${orderbook.address}`);
}

// Manejo de errores
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
