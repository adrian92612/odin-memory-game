/* eslint-disable react/prop-types */
export default function GameBoard({ game, cards, handleCardClick }) {
  return (
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
  );
}
