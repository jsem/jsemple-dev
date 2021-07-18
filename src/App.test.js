import { render, screen } from '@testing-library/react';
import App from './App';
import { WebsiteTitle } from './constants/Constants';

test('renders the website title', () => {
  render(<App />);
  const title = screen.getByText(WebsiteTitle);
  expect(title).toBeInTheDocument();
});
