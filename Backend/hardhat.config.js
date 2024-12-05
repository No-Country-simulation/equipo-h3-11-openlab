require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
      accounts: [process.env.PRIVATE_KEY],
    },
    sepolia: {
      url: process.env.SEPOLIA_TESTNET_URL,
      accounts: [process.env.PRIVATE_KEY], // Llave privada sin el prefijo '0x'
      timeout: 0,
      gas: "auto",
      gasPrice: "auto",
    },
  },
};
