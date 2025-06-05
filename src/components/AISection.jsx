// src/components/AISection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRobot } from 'react-icons/fa';
import axios from 'axios';

export default function AISection() {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSend = async () => {
    if (!userInput.trim()) return;

    const newMessage = { sender: 'user', text: userInput };
    setChatHistory([...chatHistory, newMessage]);
    setUserInput('');

    try {
      const response = await axios.post('/api/chat', {
        message: userInput,
      });

      const botReply = { sender: 'bot', text: response.data.reply };
      setChatHistory((prev) => [...prev, botReply]);
    } catch (error) {
      console.error('Error:', error);
      const errorReply = { sender: 'bot', text: 'Sorry, something went wrong.' };
      setChatHistory((prev) => [...prev, errorReply]);
    }
  };

  return (
    <section id="ai" className="py-16 px-4 bg-gradient-to-tr from-cyan-50 via-white to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">🤖 AI Assistant – SoulSync</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12 text-lg max-w-3xl mx-auto">
          SoulSync is your AI-powered emotional wellness assistant designed to offer support, insights, and advice during tough times. It understands your mood and responds with empathy and intelligence.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-6 md:p-10 mx-auto max-w-3xl border border-cyan-300 dark:border-slate-700"
        >
          <div className="flex items-center gap-4 mb-4">
            <FaRobot className="text-cyan-500 text-3xl" />
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white">SoulSync AI</h3>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 text-left mb-4 shadow-inner h-64 overflow-y-auto">
            {chatHistory.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <span
                  className={`inline-block px-4 py-2 rounded-lg ${
                    msg.sender === 'user'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-white'
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          <div className="flex mt-4">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your feeling or question..."
              className="flex-grow p-3 rounded-l-lg border border-cyan-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
            />
            <button
              onClick={handleSend}
              className="px-6 py-2 bg-cyan-500 text-white rounded-r-lg font-semibold hover:bg-cyan-600 transition"
            >
              Send
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
