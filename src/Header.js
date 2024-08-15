import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-5 flex-wrap">
      <div className="logo flex items-center text-2xl font-bold">
        <div className="logo-icon w-7 h-7 bg-gradient-to-br from-indigo-400 to-blue-300 rounded-full mr-2"></div>
        <img
          src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/logo.png"
          width="50"
          alt="BookAI Logo"
          className="mr-2"
        />
        BookAI
      </div>
      <nav className="flex items-center flex-wrap">
        <a href="#features" className="text-white ml-5 font-light hover:text-purple-500 transition duration-300">
          Features
        </a>
        <a href="#how-it-works" className="text-white ml-5 font-light hover:text-purple-500 transition duration-300">
          How It Works
        </a>
        <a href="#roadmap" className="text-white ml-5 font-light hover:text-purple-500 transition duration-300">
          Roadmap
        </a>
        <a href="/api" className="text-white ml-5 font-light hover:text-purple-500 transition duration-300">
          API
        </a>
        <a href="/api#pricing" className="text-white ml-5 font-light hover:text-purple-500 transition duration-300">
          Price
        </a>
        <a href="/api#pricing" className="text-white ml-5 font-light hover:text-purple-500 transition duration-300">
          Models
        </a>
        <a href="javascript:void(0);" id="auth-button" className="text-white ml-5 font-light hover:text-purple-500 transition duration-300">
          Login / Sign Up
        </a>
        <a href="javascript:void(0);" id="profile-button" style={{ display: 'none' }} className="text-white ml-5 font-light hover:text-purple-500 transition duration-300">
          Profile
        </a>
        <a href="javascript:void(0);" id="logout-button" style={{ display: 'none' }} className="text-white ml-5 font-light hover:text-purple-500 transition duration-300">
          Log Out
        </a>
      </nav>
    </header>
  );
};

export default Header;
