import React from "react";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map((name, index) => (
      <button
        key={index}
        className={styles.button}
        onClick={() => onLeaveFeedback(name)}
      >
        {name}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
