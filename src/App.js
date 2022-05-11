import './App.css';
import { useEffect, useState } from 'react';

function App() {
  useEffect(() => {
    fetch('https://api.memegen.link/templates')
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  return (
    <div className="App">
      <h1>RANDOM MEME GENERATOR!</h1>
      <label>
        Top Text
        <br />
        <input type="text" />
      </label>
      <br />
      <label>
        Bottom Text
        <br />
        <input type="text" />
      </label>
    </div>
  );
}

export default App;
