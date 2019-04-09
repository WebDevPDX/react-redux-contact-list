import uuid from 'uuid'
import contacts from './contacts'

jest.mock('uuid', () => {
  return {
    v4: jest.fn(() => 'mockedValue'),
  }
})

describe('contacts', () => {
  it('returns initial state correctly', () => {
    const expectedState = [
      {
        _id: 'testID123',
        firstName: 'ExampleFN',
        lastName: 'ExampleLN',
        email: 'fn.ln@gmail.com',
        country: 'US',
      },
    ]

    expect(contacts(undefined)).toEqual(expectedState)
  })

  it('returns current state if unknown action is fired', () => {
    const mockAction = {
      type: 'NONEXISTENT',
      payload: [{ this: 'is weird' }],
    }
    const expectedState = [
      {
        _id: 'testID123',
        firstName: 'ExampleFN',
        lastName: 'ExampleLN',
        email: 'fn.ln@gmail.com',
        country: 'US',
      },
    ]

    expect(contacts(undefined, mockAction)).toEqual(expectedState)
  })

  it('adds a contact on ADD_CONTACT', () => {
    const mockValue = {
      _id: 'jest1',
      firstName: 'jest1',
      lastName: 'jest1',
      email: 'jest1@jest.com',
      country: 'US',
    }
    const mockAction = {
      type: 'ADD_CONTACT',
      contact: mockValue,
    }
    const expectedState = [
      {
        _id: 'testID123',
        firstName: 'ExampleFN',
        lastName: 'ExampleLN',
        email: 'fn.ln@gmail.com',
        country: 'US',
      },
      {
        _id: 'mockedValue',
        firstName: 'jest1',
        lastName: 'jest1',
        email: 'jest1@jest.com',
        country: 'US',
      },
    ]

    expect(contacts(undefined, mockAction)).toEqual(expectedState)
  })

  it('deletes a contact on DELETE_CONTACT', () => {
    const mockState = [
      {
        _id: 'testID123',
        firstName: 'ExampleFN',
        lastName: 'ExampleLN',
        email: 'fn.ln@gmail.com',
        country: 'US',
      },
      {
        _id: 'mockedValue',
        firstName: 'jest1',
        lastName: 'jest1',
        email: 'jest1@jest.com',
        country: 'US',
      },
    ]
    const mockValue = {
      _id: 'mockedValue',
      firstName: 'jest1',
      lastName: 'jest1',
      email: 'jest1@jest.com',
      country: 'US',
    }
    const mockAction = {
      type: 'DELETE_CONTACT',
      contact: mockValue,
    }
    const expectedState = [
      {
        _id: 'testID123',
        firstName: 'ExampleFN',
        lastName: 'ExampleLN',
        email: 'fn.ln@gmail.com',
        country: 'US',
      },
    ]

    expect(contacts(mockState, mockAction)).toEqual(expectedState)
  })

  it('updates a contact on EDIT_CONTACT', () => {
    const mockState = [
      {
        _id: 'testID123',
        firstName: 'ExampleFN',
        lastName: 'ExampleLN',
        email: 'fn.ln@gmail.com',
        country: 'US',
      },
    ]
    const mockValue = {
      _id: 'testID123',
      firstName: 'jest1',
      lastName: 'jest1',
      email: 'jest1@jest.com',
      country: 'US',
    }
    const mockAction = {
      type: 'EDIT_CONTACT',
      contact: mockValue,
    }
    const expectedState = [
      {
        _id: 'testID123',
        firstName: 'jest1',
        lastName: 'jest1',
        email: 'jest1@jest.com',
        country: 'US',
      },
    ]

    expect(contacts(mockState, mockAction)).toEqual(expectedState)
  })
})
