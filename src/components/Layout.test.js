import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import Layout from './Layout';

const renderWithTheme = (ui) => {
  const router = createMemoryRouter([
    { path: '/', element: ui },
  ], {
    initialEntries: ['/'],
    initialIndex: 0,
  });
  return render(
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

describe('Layout Component', () => {
  beforeEach(() => {
    document.documentElement.className = '';
  });

  it('renders children correctly', () => {
    renderWithTheme(
      <Layout>
        <div data-testid="child">Test Content</div>
      </Layout>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('renders with default theme', () => {
    renderWithTheme(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );
    expect(document.documentElement).not.toHaveClass('dark');
  });

  it('renders with dark theme', () => {
    // Mock localStorage
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => 'dark'),
        setItem: jest.fn()
      }
    });

    renderWithTheme(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );
    expect(document.documentElement).toHaveClass('dark');
  });

  it('renders with custom className', () => {
    renderWithTheme(
      <Layout className="custom-class">
        <div>Test Content</div>
      </Layout>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    renderWithTheme(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Certifications')).toBeInTheDocument();
  });
});
