import React, { useState } from "react";
import { resultinitialstate } from "../../contest";
import Answertimer from "../Answertimer/Answertimer";
import  Result  from "../Result/Result.jsx";
import "./Quiz.scss";

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIds, setAnswerIds] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(resultinitialstate);
  const [showResult, setShowResult] = useState(false);
  const [showAnswerTimer, setShowAnswerTimer] = useState(true);

  const { question, choices, correctanswer } = questions[currentQuestion];

  const onAnswerClick = (answer, index) => {
    setAnswerIds(index);
    if (answer === correctanswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };

  const onClickNext = (finalanswer) => {
    setAnswerIds(null);
    setShowAnswerTimer(false);
    setResult((prev) => ({
      ...prev,
      score: finalanswer ? prev.score + 5 : prev.score,
      correctanswer: finalanswer ? prev.correctanswer + 1 : prev.correctanswer,
      wronganswer: finalanswer ? prev.wronganswer : prev.wronganswer + 1,
    }));

    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }

    setTimeout(() => {
      setShowAnswerTimer(true);
    });
  };

  const onTryAgain = () => {
    setResult(resultinitialstate);
    setShowResult(false);
  };

  const handleTimeUp = () => {
    setAnswer(false);
    onClickNext(false);
  };

  return (
    <div className="Quiz-container">
      {!showResult ? (
        <>
          { showAnswerTimer &&  (
            <Answertimer duration={5} onTimeUp={handleTimeUp} /> )}
          <span className="active-question">{currentQuestion + 1}</span>
          <span className="total-question">/{questions.length}</span>
          <h2>{question}</h2>
          <ul>
            {choices.map((choice, index) => (
              <li
                onClick={() => onAnswerClick(choice, index)}
                key={choice}
                className={answerIds === index ? "selected-answer" : ""}
              >
                {choice}
              </li>
            ))}
          </ul>
          <div className="footer">
            <button
              onClick={() => onClickNext(answer)}
              disabled={answerIds === null}
            >
              {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </>
      ) : (
        <Result 
          result ={result} 
          onTryAgain={onTryAgain} 
          totalquestion={questions.length}
          />
      )}
    </div>
  );
};

export default Quiz;
