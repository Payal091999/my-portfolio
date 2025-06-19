import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Chatbot from './Chatbot';
import userEvent from '@testing-library/user-event';

describe('Chatbot Component', () => {
  beforeEach(() => {
    // Mock OpenAI API
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders initial message', () => {
    render(<Chatbot />);
    expect(screen.getByText(/Hi! I can help you with web development/i)).toBeInTheDocument();
  });

  it('handles sending a message', async () => {
    render(<Chatbot />);
    const input = screen.getByPlaceholderText(/Type your message/i);
    const sendButton = screen.getByText(/Send/i);

    // Mock API response
    global.fetch.mockResolvedValueOnce({
      json: () => Promise.resolve({
        choices: [{
          message: {
            content: 'Test response from AI'
          }
        }]
      })
    });

    fireEvent.change(input, { target: { value: 'Test message' } });
    fireEvent.click(sendButton);

    await waitFor(() => {
      expect(screen.getByText(/Test response from AI/i)).toBeInTheDocument();
    });
  });

  it('handles error state', async () => {
    render(<Chatbot />);
    const input = screen.getByPlaceholderText(/Type your message/i);
    const sendButton = screen.getByText(/Send/i);

    // Mock API error
    global.fetch.mockRejectedValueOnce(new Error('API Error'));

    fireEvent.change(input, { target: { value: 'Test message' } });
    fireEvent.click(sendButton);

    await waitFor(() => {
      expect(screen.getByText(/Sorry, I encountered an error/i)).toBeInTheDocument();
    });
  });

  it('handles message clearing', () => {
    render(<Chatbot />);
    const clearButton = screen.getByText(/✕/);

    fireEvent.click(clearButton);
    expect(screen.getByText(/Hi! I can help you with web development/i)).toBeInTheDocument();
  });
});
