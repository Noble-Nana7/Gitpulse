// src/pages/LoginPage.js
import React, { useState } from 'react';
import InputField from '../components/InputField'; // Import reusable InputField component
import Button from '../components/Button';         // Import reusable Button component
import axios from 'axios';                        // Import axios for making API requests
import { useNavigate } from 'react-router-dom';   // Import useNavigate for navigation
import './LoginPage.css';                         // Import the login page CSS

function LoginPage() {
  const [username, setUsername] = useState('');  // State for the username input
  const [error, setError] = useState('');        // State for error message
  const [loading, setLoading] = useState(false); // State for loading indicator
  const navigate = useNavigate();                // useNavigate for programmatic navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);                            // Show loading indicator while fetching
    setError('');                                // Clear any previous error

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      
      // If the request is successful, redirect to the user's activity page or dashboard
      console.log(response.data);  // You can log or save this user data as needed
      navigate(`/activity/${username}`); // Redirect to a new page for the user's data

    } catch (error) {
      setLoading(false);                             // Hide the loading indicator after the request is complete
      if (error.response && error.response.status === 404) {
        setError('User not found. Please check the username and try again.');  // Set error if user not found
      } else {
        setError('Something went wrong. Please try again later.'); // Generic error message
      }
    } finally {
      setLoading(false);                            // Hide loading indicator
    }
  };

  return (
    <div className="login-page">
      <h1>Login to GitPulse</h1>
      <form onSubmit={handleSubmit}>
        <InputField
          label="GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button type="submit">Login</Button>
        {loading && <p>Loading...</p>}  {/* Show loading text */}
        {error && <p className="error-message">{error}</p>}  {/* Show error message */}
      </form>
    </div>
  );
}

export default LoginPage;
