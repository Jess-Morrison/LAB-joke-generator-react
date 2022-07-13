import React, { useState } from 'react';
import getJoke from '../api/jokeData';

export default function Button() {
  const [joke, setJoke] = useState();
  const [delivery, setDelivery] = useState();

  const newJoke = () => {
    console.warn(getJoke());
    getJoke().then((jokeObj) => setJoke(jokeObj.setup));
  };
  console.warn(joke);
  console.warn(delivery);
  const jokeDelivery = () => {
    getJoke().then((jokeObj) => setDelivery(jokeObj.delivery));
  };
  return (
    <div>
      {/* <h3>joke ? {setup ? joke.setup : joke.delivery} : '' </h3> */}
      <h3> {joke || delivery}  </h3>

      {joke
        ? <button type="submit" onClick={jokeDelivery}> Get Punchline!</button>
        : <button type="submit" onClick={newJoke}> Tell me a Joke!</button>}
    </div>
  );
}
