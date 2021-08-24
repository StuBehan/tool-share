import { render, screen } from '@testing-library/react';
import App from './App';
import Login from './components/login/login';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Tool Share!/i);
  expect(linkElement).toBeInTheDocument();
});

test('reders the login component', () => {
  render(<App />);
  const loginElement = screen.getByText(/Enter your login details!/);
  expect(loginElement).toBeInTheDocument();
})
