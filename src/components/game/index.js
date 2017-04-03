import React from 'react';
import ReactDOM from 'react-dom';
import Gform from './gform/index';
import Guess from './guess/index';
import Response from './response/index';
import Nav from './nav/index';
import './index.css';
//nav.js
//gameWindow.js 
//gameResponse.js  refers to state.
//gameForm.js    guess no. refers to state.
//previousGuesses.js refers to state.

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      correctAnswer: 10,
      prevGuesses: [2, 3, 98]
    }
  }
  render () {
    const guesses = this.state.prevGuesses.map((obj, i) => {})
    return (
      <div>
        <header>
          <Nav />
          <h1>Hot or Cold</h1>
        </header>
        <section class="">
          <Response />
          <Gform />
          {guesses}
        </section>
      </div>
    );
  };
}
