import "./GameSettings.css";

/* eslint-disable react/prop-types */
const minimum = 3;
const maximum = 30;

export default function GameSettings({
  maxCards,
  setMaxCards,
  category,
  setCategory,
  game,
  setGame,
}) {
  return (
    <form className="game-form">
      <p>Card Count: {maxCards} </p>
      <div className="range-container">
        <p>{minimum}</p>
        <input
          className="game-form__range"
          type="range"
          min={minimum}
          max={maximum}
          value={maxCards}
          onChange={(e) => setMaxCards(e.target.value)}
        />
        <p>{maximum}</p>
      </div>
      <p>Category</p>
      <input value={category} onChange={(e) => setCategory(e.target.value)} required />
      <button
        onClick={(e) => {
          e.preventDefault();
          if (category.trim()) {
            setGame(!game);
          }
        }}
      >
        Start
      </button>
    </form>
  );
}
