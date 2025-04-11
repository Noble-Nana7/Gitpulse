// src/components/Button.js
import React from 'react';
import './Button.css'; // We'll create the CSS for this button

function Button({ type, onClick, children }) {
  return (
    <button className="btn" type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
