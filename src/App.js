import { useState } from "react";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Section from "./components/Section";
import Notification from "./components/Notification";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (review) => {
    switch (review) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    const positivePercentage = (good * 100) / total;
    return positivePercentage;
  };

  const optionsFeedbac = ["good", "neutral", "bad"];

  return (
    <div className="Feedback">
      <Section title={"Please leave feedback"}>
        <FeedbackOptions
          options={optionsFeedbac}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title={"Statistics"}>
        {countTotalFeedback() === 0 ? (
          <Notification message={"No feedback given"} />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}

export default App;
