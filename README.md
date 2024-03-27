# An NFT app for financial reporting

Deploy an ERC721 smart contract and mint a series of NFTs with links to metadata. Each NFT points to an object whose properties represent a data snapshot taken at a given point in time.

![](https://smartnarrative.network/home_page.jpg)

Click the home page graphic for network view:

[Smart Narrative](https://smartnarrative.network/)

![](https://smartnarrative.network/screenshot_network.jpg)


Install and run:

```sh
npm install
npm start
```

or:

```sh
yarn install
yarn start
```

### Configuration

Create a MetaMask (or other) wallet and add address to WALLET_ADDRESS.

Sign up for an Infura (or other Web3 provider) account.
Get an API key and add value to INFURA_PROVIDER.

Create an ERC721 contract and add address to CONTRACT_ADDRESS.

Add these values to config.local. This file is listed in .gitignore:

Copy these values to config.tsx, but DO NOT COMMIT these values to the code. For any commits, discard those changes and eep the original 'xxxxxxxxxxxxxxxxxxxxxxxx' values.

```sh
const config = {
  INFURA_PROVIDER: 'xxxxxxxxxxxxxxxxxxxxxxxx',
  CONTRACT_ADDRESS: 'xxxxxxxxxxxxxxxxxxxxxxxx',
  WALLET_ADDRESS: 'xxxxxxxxxxxxxxxxxxxxxxxx',
};

export default config;
```