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
      <p>Card Count: {maxCards} </p>
      <input
        className="game-form__range"
        type="range"
        min="3"
        max="25"
        value={maxCards}
        onChange={(e) => setMaxCards(e.target.value)}
      />
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
