import React, { useContext } from "react";
import "./Homepage.css";

import { walletConnect } from "../ConnectWallet";
import { AuthContext, AuthContextProvider } from "../AuthContext";
import { MetamaskSVG } from "./MetamaskSVG";

export const Homepage = () => {
    const { walletAddress } = useContext(AuthContext);

    return (
        <>
            <main class="page">
                <span class="page-logo metamask-logo">
                    <MetamaskSVG />
                </span>
                <h1 class="page-heading">Welcome to Metamask Wallet SDK</h1>
                <span class="page-msg">
                    We are happy to see you here. Time to go to the moon.
                </span>
                {!walletAddress ? (
                    <button class="connect-action-btn" onClick={walletConnect}>
                        Connect Metamask
                    </button>
                ) : (
                    <button class="connect-action-btn disconnect-action-btn">
                        Disconnected Metamask
                    </button>
                )}
                {walletAddress ? (
                    <span class="wallet-address-display">{walletAddress}</span>
                ) : null}
            </main>
            <footer class="page-footer">
                Powered By -
                <a
                    href="https://www.lync.world/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Lync
                </a>
            </footer>
        </>
    );
};
