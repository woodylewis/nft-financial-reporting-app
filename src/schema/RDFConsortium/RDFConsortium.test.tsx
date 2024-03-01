import React from 'react';
// import { shallow, ShallowWrapper, mount } from "enzyme";
import { create, ReactTestRenderer } from 'react-test-renderer';

import { RDFConsortium } from './RDFConsortium';

// let wrapper: ShallowWrapper;
let snapshot: ReactTestRenderer;
// let mountedInstance;

beforeEach(() => {
  const members = ['member1'];
  const network = <RDFConsortium id='DSFNetwork' members={members} />;

  snapshot = create(network);
  // wrapper = shallow(network);
  // mountedInstance = mount(network);
});

describe('<RDFConsortium />', () => {
  test('it matches the snapshot', () => {
    expect(snapshot.toJSON()).toMatchSnapshot();
  });
});
