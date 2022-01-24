import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders Loader', () => {
  render(<App />);
  screen.findByTestId('loader');
});
