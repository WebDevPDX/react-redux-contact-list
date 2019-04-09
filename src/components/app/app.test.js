import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import App from './App'

it('renders correctly', () => {
  const renderer = new ShallowRenderer()
  const tree = renderer
    .render(<App />)

  expect(tree).toMatchSnapshot();
});