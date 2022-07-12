import React, { useState } from 'react';
import getJoke from '../api/jokeData';

export default function Button() {
  const [joke, setJoke] = useState();

  const newJoke = () => {
    getJoke().then((jokeObj) => setJoke(jokeObj.setup));
  };
  return (
    <div>
      <h3>{ joke } </h3>
      <button type="submit" onClick={newJoke}> Tell me a Joke!</button>
    </div>
  );
}
