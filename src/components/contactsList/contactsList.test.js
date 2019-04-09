import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import ContactsList from './ContactsList'

it('renders correctly', () => {
  const renderer = new ShallowRenderer()
  const mockContacts = [
    {
      _id: 'testID123',
      firstName: 'ExampleFN',
      lastName: 'ExampleLN',
      email: 'fn.ln@gmail.com',
      country: 'US',
    },
  ]
  const tree = renderer
    .render(<ContactsList contacts={mockContacts} />)

  expect(tree).toMatchSnapshot();
});