import React, { useState } from 'react';
import getJoke from '../api/jokeData';

export default function Button() {
  const [joke, setJoke] = useState('Tell me a Joke!');
  const [delivery, setDelivery] = useState();

  const newJoke = () => {
    if (joke === 'Tell me a Joke!') {
      getJoke().then((jokeObj) => setJoke(jokeObj.setup));
    // eslint-disable-next-line brace-style
    }
    // && setDelivery(jokeObj.delivery));
    else if (delivery === 'Get punchline!') {
      // eslint-disable-next-line no-lone-blocks
      { getJoke().then((jokeObj) => setDelivery(jokeObj.delivery)); }
    }
  };
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div>
      <h3> {joke} </h3>

      { joke
        ? <button type="submit" onClick={newJoke}> Get Punchline!</button>
        : <button type="submit" onClick={newJoke}> Tell me a Joke!</button>}
      {/* <h3>{ delivery } </h3> */}
      {/* { delivery
        ? <button type="submit" onClick={jokeDelivery}> Tell me a Joke!</button> : ''} */}
    </div>
  );
}
