/* eslint-disable react/prop-types */
export default function EndMsg({ endMsg, resetGame }) {
  return (
    <div className="end-message">
      <p>{endMsg}</p>
      <button onClick={resetGame}>Replay?</button>
    </div>
  );
}
