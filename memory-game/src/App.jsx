import { useEffect, useState } from "react";
import "./App.css";
import Scoreboard from "./components/Scoreboard";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [game, setGame] = useState(false);
  const [maxCards, setMaxCards] = useState(9);
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);

  function shuffleCards(cards) {
    return cards.sort(() => Math.random() - 0.5);
  }

  function handleCardClick({ target }, id) {
    console.log(target, id);
    if (!selectedCards.includes(id)) {
      setSelectedCards([...selectedCards, id]);
      setScore((prevScore) => prevScore + 1);
      shuffleCards(cards);
      if (score + 1 >= bestScore) {
        setBestScore(score + 1);
      }
    } else {
      setGame(!game);
      setSelectedCards([]);
      setScore(0);
    }
    console.log(selectedCards);
  }

  useEffect(() => {
    let isMounted = true;
    async function getCat() {
      try {
        const data = await fetch(
          `https://api.pexels.com/v1/search?query=cat&per_page=${maxCards}`,
          {
            headers: {
              Authorization: "09H3yUdk3RzVen4vhzOMxzfpC7gKYrTZpAy0GZ9WK4ja5apSkU8DpZ6k",
            },
          }
        );
        const res = await data.json();
        if (res.photos.length < maxCards) {
          throw new Error("No Data for this one.");
        }
        if (isMounted) setCards([...res.photos]);
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    }
    getCat();

    return () => (isMounted = false);
  }, [maxCards]);

  return (
    <>
      <main className="main">
        <Scoreboard score={score} best={bestScore} max={maxCards} />
        {!game && (
          <div>
            <p>Diffculty Meter: {maxCards} </p>
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
          {game &&
            cards.map((card) => {
              return (
                <div key={card.id} className="card" onClick={(e) => handleCardClick(e, card.id)}>
                  <img src={card.src.portrait} alt={card.alt} />
                </div>
              );
            })}
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
