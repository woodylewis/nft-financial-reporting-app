import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import Gateway from './Gateway';

describe('Gateway component', () => {
  afterEach(cleanup);

  it('should match snapshot', () => {
    const { asFragment } = render(<Gateway />);
    expect(asFragment).toMatchSnapshot();
  });
});
