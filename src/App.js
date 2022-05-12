import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [url, setUrl] = useState(
    'https://api.memegen.link/images/aag/foo/bar.png',
  );
  const [topText, settopText] = useState('');
  const [bottomText, setbottomText] = useState('');
  const [inputName, setInputName] = useState('');

  return (
    <div className="App">
      <h1>RANDOM MEME GENERATOR!</h1>

      <div className="memeTemplate">
        <label>
          Meme templates
          <input
            className="memeTemplate"
            onChange={(event) => {
              setInputName(event.currentTarget.value);
            }}
            value={inputName}
          />
        </label>
      </div>
      <img src="https://api.memegen.link/images/aag/foo/bar.png" alt="" />
      <div className="inputFields">
        <input
          onChange={(event) => {
            setInputName(event.currentTarget.value);
          }}
          value={inputName}
          type="text"
          id="topText"
          placeholder="Top"
          value={''}
        />
        <br />
        <input
          onChange={(event) => {
            setInputName(event.currentTarget.value);
          }}
          value={inputName}
          type="text"
          id="bottomText"
          placeholder="Bottom"
          value={''}
        />
      </div>

      <form className="memeButtons">
        <button>Generate</button>
        <button>Download</button>
        <button>Clear</button>
      </form>
    </div>
  );
}

export default App;
