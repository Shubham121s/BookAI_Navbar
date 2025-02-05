import React, { useState } from 'react';
import "./App.css";

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`container ${theme}`}>
      {/* Navbar */}
      <header>
        <div className="logo">
          <div className="logo-icon"></div>
          <img
            src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/logo.png"
            width="50px"
            alt="BookAI Logo"
          />
          BookAI
        </div>
        <nav>
          <a href="#">Features</a>
          <a href="#">How It Works</a>
          <a href="#">Roadmap</a>
          <a href="#">API</a>
          <a href="#">Price</a>
          <a href="#">Models</a>
          <a href="#" id="auth-button">Login / Sign Up</a>
          <button onClick={toggleTheme} id="theme-toggle">Toggle Theme</button>
        </nav>
      </header>

      {/* Card */}
      <section className="book-samples">
        <div className="card">
          <h2>Sample Books Generated by BookAI</h2>
        </div>
        <p>
          Explore some of the captivating books created using our AI technology.
        </p>
        <div className="samples-container">
          <div className="book-sample">
            <div className="book-cover-1"></div>
            <h3>Science Fiction</h3>
            <p className="book-excerpt">
              "As Dr. Elara stepped through the shimmering portal, she knew
              there was no turning back. The fate of two universes now rested in
              her hands..."
            </p>
            <a href="#" className="read-more">Read More</a>
          </div>
          <div className="book-sample">
            <div className="book-cover-2"></div>
            <h3>Mystery</h3>
            <p className="book-excerpt">
              "The old lighthouse stood silent, its beacon long extinguished.
              But on foggy nights, some swore they could still see its ghostly
              light..."
            </p>
            <a href="#" className="read-more">Read More</a>
          </div>
          <div className="book-sample">
            <div className="book-cover-3"></div>
            <h3>Fantasy</h3>
            <p className="book-excerpt">
              "The ancient prophecy spoke of a child born with starlight in
              their eyes. As the comet blazed overhead, the kingdom held its
              breath..."
            </p>
            <a href="#" className="read-more">Read More</a>
          </div>
        </div>
      </section>
      
      {/* Form */}
      <section className="newsletter">
        <div className="card">
          <h2>Stay Updated</h2>
        </div>
        <p>
          Subscribe to our newsletter for the latest AI writing tips and BookAI
          updates.
        </p>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </div>
  );
}

export default App;



