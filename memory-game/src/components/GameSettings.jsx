/* eslint-disable react/prop-types */
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
      <p>Diffculty Meter: {maxCards} </p>
      <input
        type="range"
        min="3"
        max="25"
        value={maxCards}
        onChange={(e) => setMaxCards(e.target.value)}
      />
      <input value={category} onChange={(e) => setCategory(e.target.value)} required />
      <button
        onClick={(e) => {
          e.preventDefault();
          if (category.length) {
            setGame(!game);
          }
        }}
      >
        Start
      </button>
    </form>
  );
}
