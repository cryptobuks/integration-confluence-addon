import React from 'react'
import renderer from 'react-test-renderer';
import Unauthorized from './Unauthorized'

it('renders correctly', () => {
  const tree = renderer.create(
    <Unauthorized message="Access denied" />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
