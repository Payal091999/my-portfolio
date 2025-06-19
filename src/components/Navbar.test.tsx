import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import Navbar from './Navbar';

// Mock components for routes
const HomePage = () => <div>Home Page</div>;
const SkillsPage = () => <h1>Skills</h1>;
const ExperiencePage = () => <h1>Experience</h1>;
const CertificationsPage = () => <h1>Certifications</h1>;
const TestimonialsPage = () => <h1>Testimonials</h1>;
const AIAssistantPage = () => <h1>AI Assistant</h1>;

const routes = [
  { path: '/', element: <><Navbar /><HomePage /></> },
  { path: '/skills', element: <><Navbar /><SkillsPage /></> },
  { path: '/experience', element: <><Navbar /><ExperiencePage /></> },
  { path: '/certifications', element: <><Navbar /><CertificationsPage /></> },
  { path: '/testimonials', element: <><Navbar /><TestimonialsPage /></> },
  { path: '/ai-assistant', element: <><Navbar /><AIAssistantPage /></> },
];

const renderWithProviders = (initialEntries: string[] = ['/']) => {
  const router = createMemoryRouter(routes, {
    initialEntries,
    initialIndex: 0,
  });
  return render(
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

describe('Navbar Component', () => {
  it('renders logo correctly', () => {
    renderWithProviders();
    const logo = screen.getByText(/Payal Bera/i);
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveClass('text-2xl', 'font-bold');
  });

  it('renders all navigation links', () => {
    renderWithProviders();
    const links = ['Home', 'Skills', 'Experience', 'Certifications', 'Testimonials', 'AI Assistant'];
    links.forEach(link => {
      const navLink = screen.getByRole('link', { name: new RegExp(link, 'i') });
      expect(navLink).toBeInTheDocument();
    });
  });

  it('handles theme toggle', () => {
    renderWithProviders();
    const themeToggle = screen.getByRole('button', { name: /theme/i });
    expect(themeToggle).toBeInTheDocument();

    fireEvent.click(themeToggle);
    expect(document.documentElement).toHaveClass('dark');

    fireEvent.click(themeToggle);
    expect(document.documentElement).not.toHaveClass('dark');
  });

  it('handles mobile menu toggle', () => {
    renderWithProviders();
    const menuButton = screen.getByRole('button', { name: /menu/i });
    expect(menuButton).toBeInTheDocument();

    fireEvent.click(menuButton);
    const mobileMenu = screen.getByRole('navigation');
    expect(mobileMenu).toBeVisible();

    fireEvent.click(menuButton);
    expect(mobileMenu).not.toBeVisible();
  });

  it('navigates to correct routes', () => {
    renderWithProviders(['/']);
    const skillsLink = screen.getByRole('link', { name: /skills/i });
    fireEvent.click(skillsLink);
    expect(screen.getByRole('heading', { name: /skills/i })).toBeInTheDocument();
  });

  it('handles external links', () => {
    renderWithProviders();
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
