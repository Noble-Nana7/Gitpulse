// src/pages/ErrorPage.js

import React from 'react';
import './ErrorPage.css';  // You can create a CSS file for error page styles

function ErrorPage() {
  return (
    <div className="error-container">
      <h1>Error</h1>
      <p>We couldn't find the user you were looking for. Please check the username and try again.</p>
    </div>
  );
}

export default ErrorPage;
