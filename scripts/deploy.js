//import ethers from hardhat package
const { ethers } = require('hardhat')

async function main() {
  /* A contract factory in ethers.js is an abstraction used to deploy new smart contracts , so nftContract 
     is a factory for instance of our Gameitem contract.
  */

  const nftContract = await ethers.getContractFactory('GameItem')

  //here we deploy the contract
  const deployedNftContract = await nftContract.deploy()

  //wait for the contract to be deployed
  await deployedNftContract.deployed()

  //print the address of the deployed contract
  console.log('Your NFT Contract Address:', deployedNftContract.address)
}
//call the main function and catch if there is an error
main()

  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

