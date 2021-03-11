import { render, screen } from '@testing-library/react';
import App from './App';

test('Start knop is in beeld', () => {
  render(<App />);

  expect(screen.getByText('START')).toBeInTheDocument();

});

test('Intro tekst is in beeld', () => {
  render(<App />);

  expect(screen.getByRole('dialog')).toBeInTheDocument();

});
