import React from "react";

export default function Question({ question, updateQuestion }) {
  return (
    <>
      <div id="question">
        <progress></progress>
        <h2>{question.question}</h2>
      </div>
      <ol id="answers">
        {question.answers.map((answer) => (
          <li className="answer" key={answer.id}>
            <button onClick={() => updateQuestion(question, answer.id)}>
              {answer.answer}
            </button>
          </li>
        ))}
      </ol>
    </>
  );
}
