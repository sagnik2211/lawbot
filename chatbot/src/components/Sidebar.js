import React from 'react';

const Sidebar = ({ handleSidebarAction }) => {
  const buttons = [
    { label: 'New Chat', message: 'New chat started! How can I assist you?' },
    { label: 'Recent Chats', message: 'Here are your recent chats.' },
    { label: 'Rephrase Text', message: 'Please enter the text you want me to rephrase.' },
    { label: 'Fix This Code', message: 'Share your code, and I will help you fix it.' },
    { label: 'Sample Copy', message: 'Sample copy requests will appear here.' }
  ];

  return (
    <div className="w-1/4 bg-gray-800 text-white flex flex-col justify-between p-4">
      <div>
        <h2 className="text-lg font-semibold mb-6">Menu</h2>
        <ul>
          {buttons.map((button, index) => (
            <li key={index} className="mb-4">
              <button
                onClick={() => handleSidebarAction(button.message)}
                className="w-full bg-blue-500 py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
              >
                {button.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-gray-400">
        <p>Welcome back, <strong>Shreyash</strong></p>
      </div>
    </div>
  );
};

export default Sidebar;
