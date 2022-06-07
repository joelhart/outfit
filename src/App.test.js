import { render, screen } from '@testing-library/react';
import App from './App';

test('Form Rendered Correctly', () => {
  render(<App />);
  const typeElement = screen.getByText(/Type/i);
  const nameElement =screen.getByText(/Name/i);
  expect(typeElement).toBeInTheDocument();
  expect(nameElement).toBeInTheDocument();
});