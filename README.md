# MIGRATED TO
https://github.com/LYNC-WORLD/metamask-connect-sdk

## LYNC Wallet Integration SDK
LYNC Wallet Integration SDK allows anyone to integrate Web3 Wallets inside any project in few lines of code.

## Steps to setup Wallet inside any project:

Install NPM Package: `npm install lync-wallet-sdk`

Integrate MetamaskConnect:


Wrap App component with AuthContextProvider

```
import { AuthContextProvider } from "lync-wallet-sdk";

  <AuthContextProvider chainToConnect={ChainID}>
  <App />
  </AuthContextProvider>
```
Integrate Metamask Connect Template:

```
import { AuthContext, MetamaskConnect } from "lync-wallet-sdk";

<MetamaskConnect chainId={ChainID} />
// Pass Chain ID

```
Integrate Metamask Connect Login on any component:
```
import { walletConnect, AuthContext } from "lync-wallet-sdk";

  <button onClick={() => walletConnect(ChainID)}>Connect Wallet</button> 

// Pass Chain ID
```

After user signed in via metamask, can be used to get the user's wallet address, provider for contract Interactions and Chain user is connected to.

```
  const { connectedChainId, provider, walletAddress } = useContext(AuthContext);
```

List of chain IDs:

| **Chain Name**| **Chain ID** |
|----------|-----|
| Ethereum Mainnet | 0x1  |
| Polygon    | 0x89  |
| Astar Mainnet  | 0x250  |
| Avalanche Mainnet | 0xa86a  |
| OKC Mainnet | 0x42  |
| Arbitrum One Mainnet | 0xa4b1  |
| zkSync Mainnet | 0x144  |
| Eth Goerli testnet | 0x5  |
| Mumbai Testnet | 0x13881  |
| Polygon Zkevm Testnet | 0x5a2  |
| Astar Shibuya Testnet | 0x51  |
| zkSync Testnet | 0x118  |
| Mantle Testnet | 0x1389  |
| Arbitrum Goerli Testnet | 0x66eed  |
| Avalanche Fuji Testnet | 0xa869  |
| OKC Testnet | 0x41  |
