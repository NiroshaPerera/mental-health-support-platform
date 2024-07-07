import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const quizzes = {
  1: {
    title: 'Anxiety Assessment',
    questions: [
      'Do you often feel nervous or on edge?',
      'Do you have trouble controlling your worry?',
      'Do you have difficulty relaxing?'
    ]
  },
  2: {
    title: 'Depression Assessment',
    questions: [
      'Do you often feel down or hopeless?',
      'Do you have little interest or pleasure in doing things?',
      'Do you have trouble concentrating on tasks?'
    ]
  },
  3: {
    title: 'Stress Level Assessment',
    questions: [
      'Do you often feel overwhelmed?',
      'Do you find it hard to unwind after a stressful day?',
      'Do you have physical symptoms like headaches or stomach aches when stressed?'
    ]
  }
};

const Quiz = () => {
  const { id } = useParams();
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const quiz = quizzes[id];

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (!quiz) {
    return <p>Quiz not found.</p>;
  }

  return (
    <div>
      <h1>{quiz.title}</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        {quiz.questions.map((question, index) => (
          <div key={index}>
            <p>{question}</p>
            <input
              type="text"
              value={answers[index] || ''}
              onChange={(e) => handleChange(index, e.target.value)}
              required
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <div>
          <h2>Results</h2>
          <p>Your responses have been submitted. Here are some recommendations based on your answers:</p>
          <ul>
            <li>Practice mindfulness techniques.</li>
            <li>Consider speaking with a mental health professional.</li>
            <li>Engage in regular physical exercise.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Quiz;
