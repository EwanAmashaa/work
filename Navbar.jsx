// src/components/Navbar.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeProvider';
import { UserContext } from '../contexts/UserProvider';

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/login">Login</Link>
      </div>
      <div className="navbar-options">
        <button onClick={toggleTheme}>
          Toggle Theme
        </button>
        <span>
          {user ? `Hello, ${user.username}` : 'Not logged in'}
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
