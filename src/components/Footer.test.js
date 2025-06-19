import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders with all sections', () => {
    render(<Footer />);
    
    // Check navigation section
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Certifications')).toBeInTheDocument();
    expect(screen.getByText('Testimonials')).toBeInTheDocument();
    expect(screen.getByText('AI Assistant')).toBeInTheDocument();

    // Check social links
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /email/i })).toBeInTheDocument();

    // Check copyright text
    expect(screen.getByText(/© 2025 Payal Bera. All rights reserved./i)).toBeInTheDocument();
  });

  it('handles theme toggle', () => {
    render(<Footer />);
    const themeToggle = screen.getByRole('button', { name: /theme/i });
    fireEvent.click(themeToggle);
    expect(document.documentElement).toHaveClass('dark');
  });

  it('renders with dark theme', () => {
    // Mock localStorage
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => 'dark'),
        setItem: jest.fn()
      }
    });

    render(<Footer />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(document.documentElement).toHaveClass('dark');
  });

  it('social links have correct attributes', () => {
    render(<Footer />);
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
    const githubLink = screen.getByRole('link', { name: /github/i });
    const emailLink = screen.getByRole('link', { name: /email/i });

    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(emailLink).toHaveAttribute('href', 'mailto:payalbera@example.com');
  });
});
