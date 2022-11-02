import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../../Calculator';

it("it renders and test's against the dom snapshots", () => {
  const tree = renderer.create(<Calculator />);
  expect(tree).toMatchSnapshot();
});
