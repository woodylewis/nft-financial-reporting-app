import React from 'react';
// import { shallow, ShallowWrapper, mount } from "enzyme";
import { create, ReactTestRenderer } from 'react-test-renderer';

// import { JsonLd } from "react-schemaorg";
import RDFSoftwareApplication from './RDFSoftwareApplication';

// let wrapper: ShallowWrapper;
let snapshot: ReactTestRenderer;
// let mountedInstance;

beforeEach(() => {
  const app = <RDFSoftwareApplication id='DSFController' mainEntityId='SNNetwork' />;

  snapshot = create(app);
  // wrapper = shallow(app);
  // mountedInstance = mount(app);
});

describe('<RDFSoftwareApplication />', () => {
  test('it matches the snapshot', () => {
    expect(snapshot.toJSON()).toMatchSnapshot();
  });
});
