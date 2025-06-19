import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from './ThemeContext';
import ThemeToggle from './ThemeToggle';

const renderWithTheme = (ui) => {
  return render(
    <ThemeProvider>
      {ui}
    </ThemeProvider>
  );
};

describe('ThemeToggle Component', () => {
  beforeEach(() => {
    document.documentElement.className = '';
  });

  it('renders with default theme', () => {
    renderWithTheme(<ThemeToggle />);
    const toggleButton = screen.getByRole('button', { name: /toggle theme/i });
    expect(toggleButton).toBeInTheDocument();
    expect(document.documentElement).not.toHaveClass('dark');
  });

  it('toggles theme successfully', () => {
    renderWithTheme(<ThemeToggle />);
    const toggleButton = screen.getByRole('button', { name: /toggle theme/i });
    fireEvent.click(toggleButton);
    expect(document.documentElement).toHaveClass('dark');
    fireEvent.click(toggleButton);
    expect(document.documentElement).not.toHaveClass('dark');
  });

  it('preserves theme on mount', () => {
    // Mock localStorage
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => 'dark'),
        setItem: jest.fn()
      }
    });

    renderWithTheme(<ThemeToggle />);
    expect(document.documentElement).toHaveClass('dark');
  });
});
