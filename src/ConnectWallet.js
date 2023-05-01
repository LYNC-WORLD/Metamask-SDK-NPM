import constantsValues from "./constantsValues";
import switchNetwork from "./switchNetwork";

export async function walletConnect() {
  const chainToConnect = process.env.REACT_APP_CAHINTOCONNECT;
  if (!chainToConnect) {
    console.log("Please Add CAHINTOCONNECT in env");
    return;
  }
  const { ethereum } = window;
  let currentAccount = null;
  let metamaskProvider;
  if (!ethereum) {
    alert(
      "You must install Metamask into your browser: https://metamask.io/download.htm"
    );
    return;
  }
  if (window.ethereum.providers === undefined) {
    metamaskProvider = window.ethereum;
  } else {
    metamaskProvider = window.ethereum.providers.find(
      (provider) => provider.isMetaMask
    );
  }
  let chainId = await metamaskProvider.request({ method: "eth_chainId" });
  if (chainId !== chainToConnect) {
    alert(
      `You are not connected to  ${constantsValues[chainToConnect].ChainName}\n`
    );
    try {
      await switchNetwork(metamaskProvider, chainToConnect);
    } catch (error) {
      alert("Please switch your chain first!!");
      return;
    }
    ConnectWallet(metamaskProvider, currentAccount);
  } else {
    ConnectWallet(metamaskProvider, currentAccount, chainId);
  }
}

async function ConnectWallet(metamaskProvider, currentAccount, chainId) {
  let accounts;
  try {
    accounts = await metamaskProvider.request({
      method: "eth_requestAccounts",
    });
  } catch (error) {
    console.log(error);
    return;
  }

  currentAccount = accounts[0];
  localStorage.setItem("chainToConnectLocal", chainId);
  alert("Wallet connected successfully \n");
  window.location.reload();
  return currentAccount;
}