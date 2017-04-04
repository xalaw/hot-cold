import React from 'react';
import './index.css';

export default function Gform (props) { 
  return (
    <div className="gform">
      <form>
        <input type="text" name="guess" placeholder="Enter a number" />
        <button className="butt">
          <span>Guess</span>
        </button>
        <p>Guess #{props.prevGuesses}!</p>
      </form>
    </div>
  );
}