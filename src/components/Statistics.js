import React from "react";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className="Statistics">
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      {positivePercentage > 0 ? (
        <p>Positive feedback: {positivePercentage}%</p>
      ) : (
        <p>Positive feedback: 0%</p>
      )}
    </div>
  </div>
);

export default Statistics;
