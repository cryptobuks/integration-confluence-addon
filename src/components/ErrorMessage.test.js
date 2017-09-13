import React from 'react'
import renderer from 'react-test-renderer'
import ErrorMessage from './ErrorMessage'

it('renders correctly', () => {
  const tree = renderer.create(
    <ErrorMessage url="http://badlink" />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
