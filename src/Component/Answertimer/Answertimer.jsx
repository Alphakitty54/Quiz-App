import "./Answertimer.scss";
import { useEffect, useState, useRef } from "react";

function Answertimer({ duration, onTimeUp }) {
  const [counter, setCounter] = useState(0);
  const [progressLoader, setProgressLoader] = useState(0);
  const IntervalRef = useRef();

  useEffect(() => {
    IntervalRef.current = setInterval(() => {
      setCounter((cur) => cur + 1);
    }, 1000);

    return () => clearInterval(IntervalRef.current);
  }, []);

  useEffect(() => {
    setProgressLoader(100 * (counter / duration));

    if (counter === duration) {
        clearInterval(IntervalRef.current);
        setTimeout(() => {
        onTimeUp();
      }, 1000);
    }
  }, [counter]);

  return (
    <div className="answer-timer-container">
      <div
        style={{
          width: `${progressLoader}%`,
          backgroundColor:
            progressLoader < 40
              ? "lightgreen"
              : progressLoader < 70
              ? "orange"
              : "red",
        }}
        className="progress"
      ></div>
    </div>
  );
}

export default Answertimer;
