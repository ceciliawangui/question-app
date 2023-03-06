import React, { useState } from 'react';
import './Question.css';

function Questions() {
  const [questions, setQuestions] = useState([]);
  const [questionInput, setQuestionInput] = useState('');
  const [answerInput, setAnswerInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuestion = { text: questionInput, answers: [] };
    setQuestions([...questions, newQuestion]);
    setQuestionInput('');
  };

  const handleDeleteQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };

  const handleAnswerQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions[index].answers.push(answerInput);
    setQuestions(newQuestions);
    setAnswerInput('');
  };

  return (
    <div>
      {questions.map((question, index) => (
        <div key={index}>
          <p>{question.text}</p>
          {question.answers.map((answer, answerIndex) => (
            <p key={answerIndex}>{answer}</p>
          ))}
          <form onSubmit={(e) => { e.preventDefault(); handleAnswerQuestion(index); }}>
            <input type="text" value={answerInput} onChange={(e) => setAnswerInput(e.target.value)} />
            <button type="submit">Answer</button>
          </form>
          <button onClick={() => handleDeleteQuestion(index)}>Delete</button>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input type="text" value={questionInput} onChange={(e) => setQuestionInput(e.target.value)} />
        <button type="submit">Ask Question</button>
      </form>
    </div>
  );
}

export default Questions;