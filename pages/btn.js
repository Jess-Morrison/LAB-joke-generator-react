/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import getJoke from '../api/jokeData';

export default function Btn() {
  const [joke, setJoke] = useState({});
  const [delivery, setDelivery] = useState('Tell me a joke!');

  const newJoke = () => {
    if (delivery === 'Tell me a Joke!' || delivery === 'Another?') {
      getJoke().then((jokeObj) => setJoke(jokeObj)).then(() => {
        setDelivery('Get Punchline!');
      });
    } else {
      setDelivery('Another?');
    }
  };

  return (
    <>
      <h3>{delivery === 'Tell me a Joke!' ? '' : joke.setup} </h3>

      <h3>{delivery === 'Another?' ? joke.delivery : ''}</h3>

      <button type="submit" onClick={newJoke}>{delivery}</button>

    </>
  );
}
