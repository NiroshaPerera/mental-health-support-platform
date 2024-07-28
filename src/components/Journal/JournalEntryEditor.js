import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './JournalEntryEditor.css';

const JournalEntryEditor = () => {
  const [content, setContent] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('New journal entry:', content);
    setContent('');
    history.push('/journal');
  };

  return (
    <div className="journal-entry-editor">
      <h2>New Journal Entry</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default JournalEntryEditor;
