import React from 'react'
import { render, screen } from '@testing-library/react'
import { shallow, mount } from 'enzyme'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})