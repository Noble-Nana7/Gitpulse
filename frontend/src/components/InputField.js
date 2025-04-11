// src/components/InputField.js
import React from 'react';
import './InputField.css'; // We'll create the CSS for this input

function InputField({ label, value, onChange }) {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="input"
        placeholder="Enter username"
      />
    </div>
  );
}

export default InputField;
