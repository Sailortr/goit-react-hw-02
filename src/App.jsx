import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import "./App.css"

function App() {
  const [feedback, setFeedback] = useState(() => {
    const localFeedback = JSON.parse(localStorage.getItem("feedback"));
    return localFeedback || { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  function updateFeedback(feedbackType) {
    setFeedback((feedback) => ({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    }));
  }

  function resetFeedback() {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  }

  const totalFeedback = feedback.neutral + feedback.good + feedback.bad;

  function Notification() {
    return <p className="noyet">No feedback yet</p>;
  }

  return (
    <>
    <div className="main">
    <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback feedback={feedback} totalFeedback={totalFeedback} />
      )}
    </div>
      
    </>
  );
}

export default App;