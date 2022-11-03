import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
  afterEach(cleanup);

  it('should match snapshot', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment).toMatchSnapshot();
  });
});
