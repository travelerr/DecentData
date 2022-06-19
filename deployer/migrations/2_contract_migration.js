const NftMinterContract = artifacts.require("NftMinterContract");

module.exports = async function (deployer) {
  // deploy a contract
  await deployer.deploy(NftMinterContract);
  const instance = await NftMinterContract.deployed();
};
