import React from 'react';

const ChatWindow = ({ messages }) => {
  return (
    <div className="flex-grow p-6 overflow-y-auto">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`mb-4 p-4 rounded-lg max-w-xl ${
            message.sender === 'bot' ? 'bg-blue-500 text-white' : 'bg-gray-300 self-end'
          }`}
        >
          {message.text}
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
