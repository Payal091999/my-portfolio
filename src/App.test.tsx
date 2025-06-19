import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

const routes = [
  { path: '/', element: <App /> },
  { path: '/experience', element: <App /> },
];

describe('App Component', () => {
  beforeEach(() => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
      initialIndex: 0,
    });
    render(<RouterProvider router={router} />);
  });

  it('renders without crashing', () => {
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('has proper routing setup', () => {
    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toBeInTheDocument();

    const skillsLink = screen.getByRole('link', { name: /skills/i });
    expect(skillsLink).toBeInTheDocument();

    const experienceLink = screen.getByRole('link', { name: /experience/i });
    expect(experienceLink).toBeInTheDocument();
  });

  it('handles dark mode toggle', () => {
    const themeToggle = screen.getByRole('button', { name: /theme/i });
    expect(themeToggle).toBeInTheDocument();

    userEvent.click(themeToggle);
    expect(document.documentElement).toHaveClass('dark');

    userEvent.click(themeToggle);
    expect(document.documentElement).not.toHaveClass('dark');
  });

  it('handles navigation', () => {
    const experienceLink = screen.getByRole('link', { name: /experience/i });
    userEvent.click(experienceLink);
    expect(screen.getByRole('heading', { name: /experience/i })).toBeInTheDocument();
  });
});
