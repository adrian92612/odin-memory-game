import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <>
      <main className="main">
        <div className="scoreboard">
          <p>Current Score: {score}</p>
          <p>Best Score: {bestScore}</p>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
