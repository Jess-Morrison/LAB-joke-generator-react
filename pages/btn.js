/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import getJoke from '../api/jokeData';

export default function Btn() {
  const [joke, setJoke] = useState();
  const [delivery, setDelivery] = useState('Tell me a joke!');

  if (delivery === 'Tell me a Joke!' || delivery === 'Another?') {
    getJoke().then((jokeObj) => setJoke(jokeObj)).then(() => {
      setDelivery('Get Punchline!');
    });
  } else {
    setDelivery('Another?');
  }
  return (
    <div>
      <h3>{delivery === 'Tell me a Joke!' ? '' : joke.setup || delivery === 'Another?' ? joke.delivery : ''}</h3>
      {joke
        ? <button type="submit" onClick={Btn}> Get Punchline!</button>
        : <button type="submit" onClick={Btn}> Tell me a Joke!</button>}
    </div>
  );
}
