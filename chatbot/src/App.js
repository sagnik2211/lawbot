import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';

function App() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Welcome to the chatbot! How can I assist you today?', sender: 'bot' }
  ]);

  // Function to handle user messages
  const handleSendMessage = (message) => {
    setMessages([...messages, { id: messages.length + 1, text: message, sender: 'user' }]);
  };

  // Function to update chat based on sidebar actions
  const handleSidebarAction = (message) => {
    setMessages([...messages, { id: messages.length + 1, text: message, sender: 'bot' }]);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar handleSidebarAction={handleSidebarAction} />
      <div className="flex flex-col w-3/4 bg-white">
        <ChatWindow messages={messages} />
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export default App;
