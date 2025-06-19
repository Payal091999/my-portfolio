import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  beforeEach(() => {
    const router = createMemoryRouter([
      { path: '/', element: <Navbar /> },
      { path: '/skills', element: <Navbar /> },
      { path: '/experience', element: <Navbar /> },
    ], {
      initialEntries: ['/'],
      initialIndex: 0,
    });
    render(<RouterProvider router={router} />);
  });

  it('renders logo correctly', () => {
    const logo = screen.getByText(/Payal Bera/i);
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveClass('text-2xl', 'font-bold');
  });

  it('renders all navigation links', () => {
    const links = ['Home', 'Skills', 'Experience', 'Certifications', 'Testimonials', 'AI Assistant'];
    links.forEach(link => {
      const navLink = screen.getByRole('link', { name: new RegExp(link, 'i') });
      expect(navLink).toBeInTheDocument();
    });
  });

  it('handles theme toggle', () => {
    const themeToggle = screen.getByRole('button', { name: /theme/i });
    expect(themeToggle).toBeInTheDocument();

    fireEvent.click(themeToggle);
    expect(document.documentElement).toHaveClass('dark');

    fireEvent.click(themeToggle);
    expect(document.documentElement).not.toHaveClass('dark');
  });

  it('handles mobile menu toggle', () => {
    const menuButton = screen.getByRole('button', { name: /menu/i });
    expect(menuButton).toBeInTheDocument();

    fireEvent.click(menuButton);
    const mobileMenu = screen.getByRole('navigation');
    expect(mobileMenu).toBeVisible();

    fireEvent.click(menuButton);
    expect(mobileMenu).not.toBeVisible();
  });

  it('navigates to correct routes', () => {
    const skillsLink = screen.getByRole('link', { name: /skills/i });
    fireEvent.click(skillsLink);
    expect(screen.getByRole('heading', { name: /skills/i })).toBeInTheDocument();
  });

  it('handles external links', () => {
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
