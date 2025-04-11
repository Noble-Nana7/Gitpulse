import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import UserPage from './pages/UserPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
	<Route path="/user" element={<UserPage />} />
      </Routes>
    </Router>
  );
}

export default App;

