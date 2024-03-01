import React from 'react';
// import { shallow, ShallowWrapper, mount } from "enzyme";
import { create, ReactTestRenderer } from 'react-test-renderer';

// import { JsonLd } from "react-schemaorg";
import RDFEntryPoint from './RDFEntryPoint';

// let wrapper: ShallowWrapper;
let snapshot: ReactTestRenderer;
// let mountedInstance;

beforeEach(() => {
  const entryPoint = <RDFEntryPoint id='DSFSwitch' appId='SemanticSwitch' />;

  snapshot = create(entryPoint);
  // wrapper = shallow(entryPoint);
  // mountedInstance = mount(entryPoint);
});

describe('<RDFEntryPoint />', () => {
  test('it matches the snapshot', () => {
    expect(snapshot.toJSON()).toMatchSnapshot();
  });
});
