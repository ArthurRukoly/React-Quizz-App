import React, { useState } from "react";
import QUESTIONS from "../models/questions";
import Question from "./Question";
import Results from "./Results";

export default function QuinzContainer() {
  const [questionStep, setQuestionStep] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  let isFinished = false;

  function updateQuestion(question, answerId) {
    let newUserAnswers = [...userAnswers];
    newUserAnswers.push({
      question: question,
      answerId: answerId,
    });
    setQuestionStep((step) => step + 1);
    setUserAnswers(newUserAnswers);
    console.log(userAnswers);
  }

  if (questionStep >= QUESTIONS.length) {
    isFinished = true;
  }

  return (
    <>
      {!isFinished ? (
        <div id="quiz">
          <Question
            question={QUESTIONS[questionStep]}
            updateQuestion={updateQuestion}
          />
        </div>
      ) : (
        <Results userAnswers={userAnswers} />
      )}
    </>
  );
}
