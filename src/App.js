import './App.css';
import { useState } from 'react';
import Quiz from './components/Quiz';
import Results from './components/Results';
import image from './undraw_adventure_4hum 1.svg';

function App() {
  const [gameState, setGameState] = useState("playing");
  const [score, setScore] = useState(0);

  return (
    <main className='App'>
      <h1>Country Quiz</h1>
      <div className="grid">
        <img className="adventure-image" src={image} alt="" />
        {gameState === "playing" && <Quiz score={score} setScore={setScore} setGameState={setGameState} /> }
        {gameState === "results" && <Results score={score} setScore={setScore} setGameState={setGameState} /> }
      </div>
    </main>
  );
}

export default App;
