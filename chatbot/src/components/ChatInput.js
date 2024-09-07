import React, { useState } from 'react';

const ChatInput = ({ onSendMessage }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput(''); // Clear input after sending
    }
  };

  return (
    <div className="p-4 bg-gray-200 flex">
      <input
        type="text"
        className="flex-grow p-2 border border-gray-400 rounded"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => (e.key === 'Enter' ? handleSend() : null)}
      />
      <button
        onClick={handleSend}
        className="ml-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300"
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
