import React, { useState } from 'react';
import { IoIosClose } from 'react-icons/io';

function LoginPopup({ setShowLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Clear any previous error messages
    setError('');

    // Basic validation: check if username and password are entered
    if (!username || !password) {
      setError('Iltimos, foydalanuvchi nomi va parolni kiriting.');
      return;
    }

    // Simulate login action (Here, you could add more validation if needed)
    if (username === 'user' && password === 'password') {
      console.log('Foydalanuvchi tizimga kirgan');
      setShowLogin(false); // Close the popup after successful login
    } else {
      setError('Foydalanuvchi nomi yoki parol noto‘g‘ri.');
    }
  };

  const handleClose = () => {
    setShowLogin(false); // Close the popup without login
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-3 right-3 text-2xl text-gray-600 hover:text-red-600 transition"
        >
          <IoIosClose />
        </button>
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
        {error && (
          <p className="mb-4 text-sm text-red-500 bg-red-100 p-2 rounded-md">
            {error}
          </p>
        )}
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Foydalanuvchi nomi
            </label>
            <input
              id="username"
              type="text"
              value={username} // Bind the username input field to the state
              onChange={(e) => setUsername(e.target.value)} // Update username state on input change
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Parol
            </label>
            <input
              id="password"
              type="password"
              value={password} // Bind the password input field to the state
              onChange={(e) => setPassword(e.target.value)} // Update password state on input change
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <button
            type="button"
            onClick={handleLogin}
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPopup;
