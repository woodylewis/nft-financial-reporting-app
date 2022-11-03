import React, { createContext, useContext, useState, FunctionComponent, ReactNode } from 'react';
import PropTypes from 'prop-types';
import NFT from '../../types/NFT';

import Web3 from 'web3';
/* eslint-disable @typescript-eslint/no-var-requires */
const snftABI = require('../../services/abi.json');
import config from '../../config';

const testnet = config.INFURA_PROVIDER;
const web3 = new Web3(new Web3.providers.HttpProvider(testnet));
web3.eth.defaultAccount = config.WALLET_ADDRESS;
const wallet = web3.eth.defaultAccount;
const contract = new web3.eth.Contract(snftABI, config.CONTRACT_ADDRESS);

export const SNNContext = createContext({
  contextContract: contract,
  contextWallet: wallet,
  tokenMap: new Map(),
  tokensLoaded: false,
  /* eslint-disable */
  setToken: (id: string, t: NFT) => {},
  getToken: (id: string): any => {},
  setTokenMetaData: (id: string, metaData: object) => {},
  setTokensLoaded: (state: boolean) => {},
  /* eslint-enable */
});

export const useSNNContext = () => useContext(SNNContext);

type StoreProps = {
  children: ReactNode;
};

export const Store: FunctionComponent<StoreProps> = ({ children }) => {
  const [tokens, setTokens] = useState(new Map());
  const [tokenState, setTokenState] = useState(false);

  const setToken = (id: string, t: NFT) => {
    setTokens(new Map(tokens.set(id, t)));
  };

  // eslint-disable-next-line
  const getToken = (id: string): any => {
    return tokens.get(id);
  };

  const setTokenMetaData = (id: string, metaData: object) => {
    const token = tokens.get(id);
    token['metaData'] = metaData;
  };

  const setTokensLoaded = (tokenState: boolean) => {
    setTokenState(tokenState);
  };

  return (
    <SNNContext.Provider
      value={{
        contextContract: contract,
        contextWallet: wallet,
        tokensLoaded: tokenState,
        tokenMap: tokens,
        setToken: setToken,
        getToken: getToken,
        setTokenMetaData: setTokenMetaData,
        setTokensLoaded: setTokensLoaded,
      }}
    >
      {children}
    </SNNContext.Provider>
  );
};

Store.propTypes = {
  children: PropTypes.element.isRequired,
};
