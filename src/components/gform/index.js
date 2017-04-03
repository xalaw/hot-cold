import React from 'react';
import './index.css';

export default function Gform (props) {
  const guessNum = 2;
  return (
    <div className="gform">
      <form>
        <input type="text" name="guess" placeholder="Enter a number" />
        <button className="butt">
          <span>Guess #{guessNum}!</span>
        </button>
      </form>
    </div>
  );
}