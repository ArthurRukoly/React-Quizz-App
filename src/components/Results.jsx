import React from "react";
import QuizCompleteLogoImg from "../assets/quiz-complete.png";
export default function Results({ userAnswers }) {
  return (
    <div id="summary">
      <img src={QuizCompleteLogoImg} alt="quiz completed" />
      <h2>Quiz Completed!</h2>
      {userAnswers.map((userAnswer) => (
        <>
          <div className="question">{userAnswer.question.question}</div>
          <div
            className={`user-answer ${
              userAnswer.answerId === userAnswer.question.correctAnswer
                ? "correct"
                : "wrong"
            }`}
          >
            {
              userAnswer.question.answers.find(
                (answer) => answer.id === userAnswer.answerId
              ).answer
            }
          </div>
        </>
      ))}
    </div>
  );
}
