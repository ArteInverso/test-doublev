const { ethers } = require("hardhat");

async function main() {
  // Obtén la cuenta predeterminada para desplegar el contrato
  const [deployer] = await ethers.getSigners();

  console.log("Desplegando el contrato con la cuenta:", deployer.address);

  // Compila el contrato
  const VotingSystem = await ethers.getContractFactory("VotingSystem");
  const votingSystem = await VotingSystem.deploy();

  await votingSystem.deployed();

  console.log("Contrato desplegado en la dirección:", votingSystem.address);
}

// Ejecuta la función de despliegue
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });