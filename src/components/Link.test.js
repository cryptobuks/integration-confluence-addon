import React from 'react'
import renderer from 'react-test-renderer';
import Link from './Link'

it('renders correctly', () => {
  const tree = renderer.create(
    <Link shareUrl="https://in.invisionapp.com/share/ATBWCTHR5" />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
