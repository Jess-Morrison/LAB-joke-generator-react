import React, { useState } from 'react';
import getJoke from '../api/jokeData';

export default function Button() {
  const [joke, setJoke] = useState();

  const newJoke = () => {
    getJoke().then((jokeObj) => setJoke(jokeObj.setup));
  };
  const jokeDelivery = () => {
    getJoke().then((jokeObj) => setJoke(jokeObj.delivery));
  };
  return (
    <div>
      <h3>{ joke } </h3>

      {newJoke()
        ? <button type="submit" onClick={newJoke}> Tell me a Joke!</button> : <button type="submit" onClick={jokeDelivery}> Get Punchline!</button>}
    </div>
  );
}
