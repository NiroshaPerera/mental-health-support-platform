import React, { useState } from 'react';
import './MoodTracker.css';

const MoodTracker = () => {
  const [moodEntries, setMoodEntries] = useState([
    { date: '2024-07-01', mood: 'Happy' },
    { date: '2024-07-02', mood: 'Stressed' }
  ]);
  const [mood, setMood] = useState('');

  const handleMoodSubmit = (e) => {
    e.preventDefault();
    const newEntry = { date: new Date().toISOString().split('T')[0], mood };
    setMoodEntries([...moodEntries, newEntry]);
    setMood('');
  };

  return (
    <div className="mood-tracker">
      <h2>Mood Tracker</h2>
      <form onSubmit={handleMoodSubmit}>
        <select value={mood} onChange={(e) => setMood(e.target.value)} required>
          <option value="">Select mood</option>
          <option value="Happy">Happy</option>
          <option value="Sad">Sad</option>
          <option value="Stressed">Stressed</option>
          <option value="Calm">Calm</option>
          <option value="Anxious">Anxious</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      <ul>
        {moodEntries.map((entry, index) => (
          <li key={index}>
            <p>{entry.date}: {entry.mood}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoodTracker;
