import { render, screen } from '@testing-library/react';
import NavBar from './navBar';
import { BrowserRouter } from 'react-router-dom'

test('has 4 buttons', () => {
  render(
  <BrowserRouter>
    <NavBar />
  </BrowserRouter>
  )
  const homeButton = screen.findByText(/home/)
  const toolsButton = screen.findByText(/tools/)
  const searchButton = screen.findByText(/search/)
  const optionsButton = screen.findByText(/options/)
  expect(homeButton).toBeInTheDocument
  expect(toolsButton).toBeInTheDocument
  expect(searchButton).toBeInTheDocument
  expect(optionsButton).toBeInTheDocument
})
