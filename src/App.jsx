import "./App.css";
import Quiz from "./Component/Quiz/Quiz";
import { useEffect, useState } from 'react';
import { jsQuiz } from "./contest.js";

function App() {
  useEffect(() => {
    getQuestion();
  }, []);

  const getQuestion = async () => {
    try {
      const response = await fetch(
        "https://64a518ba00c3559aa9bf0d35.mockapi.io/questions"
      );
      const questionResponse = await response.json();
      console.log(questionResponse);
    } catch (error) {
      console.log(error);
    }
  }

  return <Quiz questions={jsQuiz.questions} />;
}

export default App;
