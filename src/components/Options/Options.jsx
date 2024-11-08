import "./Options.css"

export default function Options({
    // eslint-disable-next-line react/prop-types
    updateFeedback,
    // eslint-disable-next-line react/prop-types
    resetFeedback,
    // eslint-disable-next-line react/prop-types
    totalFeedback,
  }) {
    return (
      <div className="buttons">
        <button className="button" onClick={() => updateFeedback("good")}>Good</button>
        <button className="button" onClick={() => updateFeedback("neutral")}>Neutral</button>
        <button className="button" onClick={() => updateFeedback("bad")}>Bad</button>
        {totalFeedback > 0 && <button className="button" onClick={resetFeedback}>Reset</button>}{" "}
        {}
      </div>
    );
  }