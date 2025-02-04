import React, { useState } from 'react';
import axios from 'axios';

function Chatbot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message to chat
    setMessages((prev) => [...prev, { role: 'user', content: input }]);

    // Send message to OpenAI API
    try {
      const response = await axios.post('/api/chat', { message: input });
      const botMessage = response.data.message;
      setMessages((prev) => [...prev, { role: 'bot', content: botMessage }]);
    } catch (error) {
      console.error('Error:', error);
    }

    setInput('');
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <div className="h-64 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded-lg ${msg.role === 'user' ? 'bg-red-custom text-white' : 'bg-light-green text-black'}`}>
              {msg.content}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          className="flex-1 p-2 border rounded-l-lg"
        />
        <button type="submit" className="bg-red-custom text-white p-2 rounded-r-lg hover:bg-red-600">
          Send
        </button>
      </form>
    </div>
  );
}

export default Chatbot;