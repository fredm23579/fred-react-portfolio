import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    const fredEls = screen.getAllByText('Fred');
    expect(fredEls.length).toBeGreaterThanOrEqual(1);
  });

  it('renders the main navigation landmark', () => {
    render(<App />);
    expect(
      screen.getByRole('navigation', { name: /main navigation/i })
    ).toBeInTheDocument();
  });

  it('renders the "Hire Me" CTA in the header', () => {
    render(<App />);
    const hireMeLinks = screen.getAllByRole('link', { name: /hire me/i });
    expect(hireMeLinks.length).toBeGreaterThanOrEqual(1);
  });
});
