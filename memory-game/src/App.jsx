import { useEffect, useState } from "react";
import "./App.css";
import Scoreboard from "./components/Scoreboard";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [game, setGame] = useState(false);
  const [maxCards, setMaxCards] = useState(9);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function getCat() {
      const data = await fetch(`https://api.pexels.com/v1/search?query=cat&per_page=${maxCards}`, {
        headers: {
          Authorization: "09H3yUdk3RzVen4vhzOMxzfpC7gKYrTZpAy0GZ9WK4ja5apSkU8DpZ6k",
        },
      });
      const res = await data.json();
      setCards([...res.photos]);
    }
    getCat();
  }, [maxCards]);

  return (
    <>
      <main className="main">
        <Scoreboard score={score} best={bestScore} max={maxCards} />
        {!game && (
          <div>
            Diffculty Meter: {maxCards}
            <input
              type="range"
              min="3"
              max="25"
              value={maxCards}
              onChange={(e) => setMaxCards(e.target.value)}
            />
            <button
              onClick={() => {
                setGame(!game);
                console.log(cards);
              }}
            >
              Start
            </button>
          </div>
        )}

        <div className="gameboard">
          {game ? cards.map((card) => <p key={card.id}>{card.id}</p>) : <p>Loading...</p>}
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
