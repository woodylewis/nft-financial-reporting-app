import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import TopBar from './TopBar';

describe('TopBar component', () => {
  afterEach(cleanup);

  it('should match snapshot', () => {
    const { asFragment } = render(<TopBar />);
    expect(asFragment).toMatchSnapshot();
  });
});
