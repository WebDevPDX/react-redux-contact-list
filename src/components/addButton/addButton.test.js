import React from 'react'
import renderer from 'react-test-renderer'
import AddButton from './AddButton'

it('renders correctly', () => {
  const tree = renderer
    .create(AddButton)

  expect(tree).toMatchSnapshot()
})