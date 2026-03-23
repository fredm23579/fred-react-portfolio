/**
 * App-level smoke tests.
 *
 * Verifies the routing shell renders without crashing and that key structural
 * landmarks are present on initial load (home route).
 */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    // "Fred" appears in both the Header and Footer logo spans — use getAllByText
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
    // Both desktop and mobile variants may be in the DOM simultaneously
    const hireMeLinks = screen.getAllByRole('link', { name: /hire me/i });
    expect(hireMeLinks.length).toBeGreaterThanOrEqual(1);
  });
});
