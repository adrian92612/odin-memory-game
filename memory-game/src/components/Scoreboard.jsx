/* eslint-disable react/prop-types */
export default function Scoreboard({ score, best, max }) {
  return (
    <div className="scoreboard">
      <p>Current Score: {score}</p>
      <p>Best Score: {best}</p>
      <p>Max Score: {max}</p>
    </div>
  );
}
