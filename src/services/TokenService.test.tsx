import { renderHook, cleanup } from '@testing-library/react';

import TokenService from './TokenService';
import config from '../config';

const networkValue = {};

const systemUnderTest = () => {
  return renderHook(() => TokenService(networkValue));
};

describe('TokenService', () => {
  afterEach(cleanup);

  test('verify contextWallet', () => {
    const { result } = systemUnderTest();
    expect(result.current.tokenContext.contextWallet).toEqual(config.WALLET_ADDRESS);
  });

  test('tokensLoaded = false', () => {
    const { result } = systemUnderTest();
    expect(result.current.tokenContext.tokensLoaded).toBe(false);
  });

  test('loading = true', () => {
    const { result } = systemUnderTest();
    expect(result.current.loading).toBe(true);
  });
});
