import { renderHook, cleanup, act } from '@testing-library/react';

import EthereumService from './EthereumService';

const systemUnderTest = () => {
  return renderHook(() => EthereumService());
};

describe('Ethereum Service', () => {
  afterEach(cleanup);

  test('test infuraGetTokenURI', async () => {
    const { result } = systemUnderTest();
    result.current.infuraGetTokenURI = jest.fn();
    await act(async () => {
      result.current.infuraGetTokenURI('100');
    });
    expect(result.current.infuraGetTokenURI).toHaveBeenCalled();
  });
});
