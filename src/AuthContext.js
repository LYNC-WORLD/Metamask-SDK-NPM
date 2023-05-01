import { ethers } from "ethers";
import React, { createContext, useEffect, useState } from "react";
import switchNetwork from "./switchNetwork";
export const AuthContext = createContext();
export function AuthContextProvider({ children }) {
  const [walletAddress, setAddress] = useState(undefined);
  const [provider, setProvider] = useState(null);
  const [chainId, setChainId] = useState(null);

  useEffect(() => {
    loadWeb3();
  }, []);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("chainChanged", async function () {
        window.location.reload();
      });
    }
  }, []);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", async function () {
        window.location.reload();
      });
    }
  }, []);

  const loadWeb3 = async () => {
    try {
      const prov = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(prov);
      const network = await prov.getNetwork();
      const chainId = network.chainId.toString();
      const chainToConnect = process.env.chainToConnect;
      console.log({ chainId });
      console.log({ chainToConnect });
      let connectedAccounts = window.ethereum._state.accounts;
      console.log(connectedAccounts);
      if (connectedAccounts.length > 0) {
        setAddress(connectedAccounts[0]);
        setChainId(chainId);
      }
    } catch (err) {
      console.log(err);
      // toast.error(err.message);
    }
  };

  return (
    <AuthContext.Provider value={{ chainId, provider, walletAddress }}>
      {children}
    </AuthContext.Provider>
  );
}
