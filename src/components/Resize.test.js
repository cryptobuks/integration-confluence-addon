import React from 'react'
import renderer from 'react-test-renderer'
import Resize from './Resize'

it('renders correctly', () => {
  const tree = renderer.create(
    <Resize size="max" action={() => {}} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
