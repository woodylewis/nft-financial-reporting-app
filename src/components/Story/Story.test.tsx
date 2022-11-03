import * as React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { Story, ChipProps } from './Story';

const cProps: ChipProps = {
  cTokenId: '1000',
  cLabel: 'Story1',
  cFunc: jest.fn(),
  networkValue: {},
};

describe('Story component', () => {
  afterEach(cleanup);

  test('calls CFunc when clicked', () => {
    render(
      <Story
        cTokenId={cProps.cTokenId}
        cLabel={cProps.cLabel}
        cFunc={cProps.cFunc}
        networkValue={cProps.networkValue}
      />,
    );
    fireEvent.click(screen.getByText(cProps.cLabel));
    expect(cProps.cFunc).toHaveBeenCalledTimes(1);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(
      <Story
        cTokenId={cProps.cTokenId}
        cLabel={cProps.cLabel}
        cFunc={cProps.cFunc}
        networkValue={cProps.networkValue}
      />,
    );
    expect(asFragment).toMatchSnapshot();
  });
});
