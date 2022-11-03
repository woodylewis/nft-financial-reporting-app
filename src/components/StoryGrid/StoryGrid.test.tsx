import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import StoryGrid from './StoryGrid';

describe('StoryGrid component', () => {
  afterEach(cleanup);

  it('should match snapshot', () => {
    const networkValue = {};
    const { asFragment } = render(<StoryGrid networkValue={networkValue} />);
    expect(asFragment).toMatchSnapshot();
  });
});
