import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AdminCourses from './AdminCourses';
import userEvent from '@testing-library/user-event';

interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
}

describe('AdminCourses Component', () => {
  const mockCourses: Course[] = [
    {
      id: '1',
      title: 'React Course',
      description: 'Learn React basics',
      price: 199,
      duration: '8 weeks'
    }
  ];

  beforeEach(() => {
    // Mock localStorage
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => JSON.stringify(mockCourses)),
        setItem: jest.fn()
      },
      writable: true
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders login form initially', () => {
    render(<AdminCourses />);
    expect(screen.getByPlaceholderText(/admin password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  it('handles admin login', () => {
    render(<AdminCourses />);
    const passwordInput = screen.getByPlaceholderText(/admin password/i);
    const loginButton = screen.getByRole('button', { name: /login/i });

    fireEvent.change(passwordInput, { target: { value: 'admin123' } });
    fireEvent.click(loginButton);

    expect(screen.getByText(/Add New Course/i)).toBeInTheDocument();
  });

  it('adds new course', async () => {
    render(<AdminCourses />);
    // Login first
    const passwordInput = screen.getByPlaceholderText(/admin password/i);
    const loginButton = screen.getByRole('button', { name: /login/i });
    fireEvent.change(passwordInput, { target: { value: 'admin123' } });
    fireEvent.click(loginButton);

    // Add new course
    const addCourseButton = screen.getByText(/Add New Course/i);
    fireEvent.click(addCourseButton);

    const titleInput = screen.getByPlaceholderText(/course title/i);
    fireEvent.change(titleInput, { target: { value: 'New Course' } });

    const saveButton = screen.getByRole('button', { name: /save/i });
    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(screen.getByText('New Course')).toBeInTheDocument();
    });
  });

  it('edits existing course', async () => {
    render(<AdminCourses />);
    // Login first
    const passwordInput = screen.getByPlaceholderText(/admin password/i);
    const loginButton = screen.getByRole('button', { name: /login/i });
    fireEvent.change(passwordInput, { target: { value: 'admin123' } });
    fireEvent.click(loginButton);

    // Edit course
    const editButton = screen.getByRole('button', { name: /edit/i });
    fireEvent.click(editButton);

    const titleInput = screen.getByPlaceholderText(/course title/i);
    fireEvent.change(titleInput, { target: { value: 'Updated Course' } });

    const saveButton = screen.getByRole('button', { name: /save/i });
    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(screen.getByText('Updated Course')).toBeInTheDocument();
    });
  });

  it('deletes course', async () => {
    render(<AdminCourses />);
    // Login first
    const passwordInput = screen.getByPlaceholderText(/admin password/i);
    const loginButton = screen.getByRole('button', { name: /login/i });
    fireEvent.change(passwordInput, { target: { value: 'admin123' } });
    fireEvent.click(loginButton);

    // Delete course
    const deleteButton = screen.getByRole('button', { name: /delete/i });
    fireEvent.click(deleteButton);

    const confirmButton = screen.getByRole('button', { name: /confirm/i });
    fireEvent.click(confirmButton);

    await waitFor(() => {
      expect(screen.queryByText('React Course')).not.toBeInTheDocument();
    });
  });
});
