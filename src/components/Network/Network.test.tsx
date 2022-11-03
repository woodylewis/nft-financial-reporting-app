import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import Network from './Network';

describe('Network component', () => {
  afterEach(cleanup);

  it('should match snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Network />
      </BrowserRouter>,
    );
    expect(asFragment).toMatchSnapshot();
  });
});
