import * as React from 'react';
import { render, cleanup } from '@testing-library/react';

import { SNNContext } from './Store';

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

const valueObj = {
  contextContract: contract,
  contextWallet: wallet,
  tokensLoaded: false,
  tokenMap: new Map(),
  setToken: (id: string, t: NFT) => {},
  getToken: (id: string): any => {},
  setTokenMetaData: (id: string, metaData: object) => {},
  setTokensLoaded: (state: boolean) => {},
};

describe('Store component', () => {
  afterEach(cleanup);

  test('renders Provider', () => {
    const { asFragment } = render(<SNNContext.Provider value={valueObj}>Test</SNNContext.Provider>);
    expect(asFragment).toMatchSnapshot();
    expect(SNNContext.Provider).toBeTruthy();
  });
});
