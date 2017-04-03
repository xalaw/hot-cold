import React from 'react';
import './index.css';

export default function Response (props) {
  const text = "cold";
  return (
    <div className="response">
      <p>
        {text}
      </p>
    </div>
  );
}