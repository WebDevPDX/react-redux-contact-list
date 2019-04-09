import React from 'react'
import renderer from 'react-test-renderer'
import DeleteButton from './DeleteButton'

it('renders correctly', () => {
  const tree = renderer
    .create(DeleteButton)

  expect(tree).toMatchSnapshot()
})