import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Chatbot() {
  const [messages, setMessages] = useState(() => {
    // Try to get chat history from localStorage
    const savedMessages = localStorage.getItem('chatHistory');
    return savedMessages ? JSON.parse(savedMessages) : [{ 
      role: 'assistant', 
      content: 'Hi! I can help you with web development, tools, and automation. What would you like to know?',
      timestamp: new Date().toLocaleTimeString()
    }];
  });
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messageEndRef = useRef(null);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    // Save chat history to localStorage
    localStorage.setItem('chatHistory', JSON.stringify(messages));
  }, [messages]);

  // Clear chat history
  const clearChat = () => {
    setMessages([{ 
      role: 'assistant', 
      content: 'Hi! I can help you with web development, tools, and automation. What would you like to know?',
      timestamp: new Date().toLocaleTimeString()
    }]);
    localStorage.removeItem('chatHistory');
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      role: 'user',
      content: input,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: messages.slice(-5).concat([{ role: 'user', content: input }]), // Keep last 5 messages for context
          temperature: 0.7,
          max_tokens: 200
        })
      });

      if (!res.ok) throw new Error('Failed to get response');

      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content || 'Something went wrong.';
      
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: reply,
        timestamp: new Date().toLocaleTimeString()
      }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date().toLocaleTimeString()
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">AI Assistant</h3>
        <div className="flex items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">Type your question below</p>
          <button
            onClick={clearChat}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            title="Clear chat history"
          >
            ✕
          </button>
        </div>
      </div>

      <div className="h-[400px] overflow-y-auto mb-6 space-y-4 pr-4">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] rounded-lg p-3 ${
              message.role === 'user' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 dark:bg-gray-700'
            }`}
            >
              <p className="text-sm break-words">{message.content}</p>
              <p className="text-xs mt-1 text-right text-gray-500 dark:text-gray-400">
                {message.timestamp}
              </p>
            </div>
          </motion.div>
        ))}
        <div ref={messageEndRef} />
      </div>

      <form onSubmit={sendMessage} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage(e)}
          placeholder="Type your message..."
          className="flex-1 p-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading}
          maxLength="500"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              Thinking...
            </div>
          ) : (
            'Send'
          )}
        </button>
      </form>
    </div>
  );
}
