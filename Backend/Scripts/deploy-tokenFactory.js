const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Desplegando contratos con la cuenta:", deployer.address);
  console.log("Balance inicial:", (await deployer.getBalance()).toString());

  const TokenFactory = await hre.ethers.getContractFactory("TokenFactory");
  const tokenFactory = await TokenFactory.deploy();

  await tokenFactory.deployed();

  console.log("TokenFactory desplegado en:", tokenFactory.address);
  console.log("Balance final:", (await deployer.getBalance()).toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
