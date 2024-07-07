import React from 'react';
import { Link } from 'react-router-dom';

const AssessmentDashboard = () => {
  const quizzes = [
    { id: 1, title: 'Anxiety Assessment' },
    { id: 2, title: 'Depression Assessment' },
    { id: 3, title: 'Stress Level Assessment' }
  ];

  return (
    <div>
      <h1>Self-Assessment Tools</h1>
      <ul>
        {quizzes.map(quiz => (
          <li key={quiz.id}>
            <h3><Link to={`/assessment/${quiz.id}`}>{quiz.title}</Link></h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssessmentDashboard;
