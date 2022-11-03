import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import Home from './Home';

describe('Home component', () => {
  afterEach(cleanup);

  it('should match snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    expect(asFragment).toMatchSnapshot();
  });
});
