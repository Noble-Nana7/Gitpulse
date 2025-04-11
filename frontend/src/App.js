import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage'; // Import LoginPage
import ErrorPage from './pages/ErrorPage';  // Import the ErrorPage
import ActivityPage from './pages/ActivityPage'; // Add ActivityPage for user data

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
	<Route path="/login" element={<LoginPage />} />
	<Route path="/error" element={<ErrorPage />} /> {/* Route for error page */}
        <Route path="/activity/:username" element={<ActivityPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;

