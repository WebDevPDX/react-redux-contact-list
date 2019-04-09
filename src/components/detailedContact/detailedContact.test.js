import React from 'react'
import renderer from 'react-test-renderer'
import DetailedContact from './DetailedContact'

it('renders correctly', () => {
  const tree = renderer
    .create(DetailedContact)

  expect(tree).toMatchSnapshot();
})