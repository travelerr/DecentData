const Web3 = require("web3");
const web3 = new Web3(window.ethereum);

const toHex = (num) => {
  return "0x" + num.toString(16);
};

export const addToNetwork = (walletAddress, chain, rpc) => {
  if (!walletAddress) {
    console.log("Unable to locate wallet address for chain list");
    return;
  }

  const params = {
    chainId: toHex(chain.chainId), // A 0x-prefixed hexadecimal string
    chainName: chain.name,
    nativeCurrency: {
      name: chain.nativeCurrency.name,
      symbol: chain.nativeCurrency.symbol, // 2-6 characters long
      decimals: chain.nativeCurrency.decimals,
    },
    rpcUrls: rpc ? [rpc] : chain.rpc,
    blockExplorerUrls: [
      chain.explorers && chain.explorers.length > 0 && chain.explorers[0].url
        ? chain.explorers[0].url
        : chain.infoURL,
    ],
  };

  web3.eth.getAccounts((error, accounts) => {
    window.ethereum
      .request({
        method: "wallet_addEthereumChain",
        params: [params, accounts[0]],
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message ? error.message : error);
        console.log(error);
      });
  });
};
