import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import Layout from './Layout';

const renderLayout = (initialEntries: string[] = ['/']) => {
  return render(
    <ThemeProvider>
      <MemoryRouter initialEntries={initialEntries}>
        <Layout />
      </MemoryRouter>
    </ThemeProvider>
  );
};

describe('Layout Component', () => {
  beforeEach(() => {
    document.documentElement.className = '';
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(),
      },
      writable: true,
    });
  });

  it('renders header, navigation, and theme toggle', () => {
    renderLayout();
    expect(screen.getByText(/Payal Bera | Software Developer/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /skills/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /toggle theme/i })).toBeInTheDocument();
  });

  it('renders with default light theme', () => {
    renderLayout();
    expect(document.documentElement).not.toHaveClass('dark');
  });

  it('renders with dark theme when specified in localStorage', () => {
    Object.defineProperty(window, 'localStorage', {
        value: {
            getItem: jest.fn(() => 'dark'),
            setItem: jest.fn(),
        },
        writable: true,
    });
    renderLayout();
    expect(document.documentElement).toHaveClass('dark');
  });

  it('renders the main content area for routes', () => {
    renderLayout();
    const mainContent = document.querySelector('.flex-grow');
    expect(mainContent).toBeInTheDocument();
  });
});
