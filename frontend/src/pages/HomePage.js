// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-container">
      <h1>Your GitHub Activity, Beautifully Visualized.</h1>
      <p>Analyze your commits, PRs, and repositories in a way that’s visual, intuitive, and fun.</p>
      <Link to="/login" className="login-link">Connect Your GitHub</Link>
    </div>
  );
}

export default HomePage;

