import * as React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('App component', () => {
  afterEach(cleanup);

  it('should have a link to network', () => {
    render(<App />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/network');
  });

  it('clicking link should navigate to network', async () => {
    render(<App />);
    await fireEvent.click(screen.getByRole('link'));
    expect(screen.getByText('NETWORK')).toBeTruthy;
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment).toMatchSnapshot();
  });
});
