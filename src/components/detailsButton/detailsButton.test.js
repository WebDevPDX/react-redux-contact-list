import React from 'react'
import renderer from 'react-test-renderer'
import DetailsButton from './DetailsButton'

it('renders correctly', () => {
  const tree = renderer
    .create(DetailsButton)

  expect(tree).toMatchSnapshot();
})