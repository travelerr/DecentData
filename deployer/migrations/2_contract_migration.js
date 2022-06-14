const NftMinterContract = artifacts.require("NftMinterContract");

module.exports = async function (deployer) {
  // deploy a contract
  await deployer.deploy(NftMinterContract);
  //access information about your deployed contract instance
  const instance = await NftMinterContract.deployed();
};
