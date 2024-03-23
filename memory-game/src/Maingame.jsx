import { useEffect, useState } from "react";
import "./Maingame.css";
import Scoreboard from "./components/Scoreboard";
import GameSettings from "./components/GameSettings";
import GameBoard from "./components/Gameboard";

function Maingame() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [game, setGame] = useState(false);
  const [maxCards, setMaxCards] = useState(9);
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [category, setCategory] = useState("Cat");

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
        const query = category.trim();
        if (!query) {
          setCards([]);
          return;
        }

        const data = await fetch(
          `https://api.pexels.com/v1/search?query=${query}&per_page=${maxCards}`,
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
  }, [maxCards, category]);

  return (
    <main className="main">
      <Scoreboard score={score} best={bestScore} max={maxCards} />

      {!game && (
        <GameSettings
          maxCards={maxCards}
          setMaxCards={setMaxCards}
          category={category}
          setCategory={setCategory}
          game={game}
          setGame={setGame}
        />
      )}
      <GameBoard game={game} cards={cards} handleCardClick={handleCardClick} />
    </main>
  );
}

export default Maingame;
