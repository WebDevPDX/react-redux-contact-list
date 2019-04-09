import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import ContactForm from './ContactForm'

it('renders correctly', () => {
  const renderer = new ShallowRenderer()
  const tree = renderer
    .render(<ContactForm match={{path: ''}} />)

  expect(tree).toMatchSnapshot();
});
