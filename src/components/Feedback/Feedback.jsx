import "./Feedback.css"

export default function Feedback({ feedback, totalFeedback }) {
    const positiveValue = Math.round((feedback.good / totalFeedback) * 100);
  
    return (
      <div className="answers">
        <p className="answer">Good: {feedback.good} </p>
        <p className="answer">Neutral: {feedback.neutral} </p>
        <p className="answer">Bad: {feedback.bad}</p>
        <p className="answer">Total: {totalFeedback} </p>
        <p className="answer positive">Positive: {positiveValue}%</p>
      </div>
    );
  }