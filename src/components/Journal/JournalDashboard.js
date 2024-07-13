import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const JournalDashboard = () => {
  const [entries, setEntries] = useState([
    { id: 1, date: '2024-07-01', content: 'Today was a good day. I felt happy and accomplished.' },
    { id: 2, date: '2024-07-02', content: 'Felt a bit stressed today, but managed to get through it.' }
  ]);

  const addEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  return (
    <div>
      <h1>Journal Dashboard</h1>
      <Link to="/journal/new-entry">Add New Entry</Link>
      <ul>
        {entries.map(entry => (
          <li key={entry.id}>
            <h3>{entry.date}</h3>
            <p>{entry.content}</p>
          </li>
        ))}
      </ul>
      <button onClick={() => addEntry({ id: 3, date: '2024-07-03', content: 'New entry content' })}>
        Add Test Entry
      </button>
    </div>
  );
};

export default JournalDashboard;
