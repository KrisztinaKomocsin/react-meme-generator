import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [topText, setTopText] = useState('topText');
  const [bottomText, setBottomText] = useState('bottomText');
  const [memeTemplate, setMemeTemplate] = useState('name');

  const url = ['https://api.memegen.link/images/aag/foo/bar.png'];
  //let randomMemes = memes[Math.floor(Math.random() * memes.length)];

  // const [genButton, setGenButton] = useState('');
  // const [downloadButton, setDownloadButton] = useState('');
  // const [resetButton, setResetButton] = useState('');

  return (
    <div className="App">
      <h1>RANDOM MEME GENERATOR!</h1>
      <div className="memeTemplate">
        <label>
          Meme templates
          <br />
          <input
            value={memeTemplate}
            onChange={(event) => setMemeTemplate(event.currentTarget.value)}
          />
        </label>
      </div>
      <div className="inputFields">
        <input
          placeholder="Top Text"
          value={topText}
          onChange={(event) => setTopText(event.currentTarget.value)}
        />
        <br />
        <input
          placeholder="Bottom Text"
          value={bottomText}
          onChange={(event) => setBottomText(event.currentTarget.value)}
        />
      </div>
      https://api.memegen.link/images/{`${memeTemplate}`}/{`${topText}`}/
      {`${bottomText}`}.png
      <img
        data-test-id="meme-image"
        src={`https://api.memegen.link/images/${memeTemplate}/${topText}/${bottomText}.png`}
        alt=""
      />{' '}
      <br />
      <br />
      <div className="buttons">
        <button>Generate</button>
        <button>Download</button>
        <button>Reset</button>
      </div>
    </div>
  );
}

export default App;
