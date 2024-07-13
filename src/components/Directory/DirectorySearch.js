import React, { useState } from 'react';

const therapists = [
  { id: 1, name: 'Dr. Jane Doe', specialty: 'Anxiety', location: 'New York, NY' },
  { id: 2, name: 'Dr. John Smith', specialty: 'Depression', location: 'Los Angeles, CA' },
  { id: 3, name: 'Dr. Emily Johnson', specialty: 'Stress Management', location: 'Chicago, IL' }
];

const DirectorySearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTherapists, setFilteredTherapists] = useState(therapists);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredTherapists(therapists.filter(therapist =>
      therapist.name.toLowerCase().includes(term) ||
      therapist.specialty.toLowerCase().includes(term) ||
      therapist.location.toLowerCase().includes(term)
    ));
  };

  return (
    <div>
      <h1>Therapist Directory</h1>
      <input
        type="text"
        placeholder="Search by name, specialty, or location"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredTherapists.map(therapist => (
          <li key={therapist.id}>
            <h3>{therapist.name}</h3>
            <p>{therapist.specialty}</p>
            <p>{therapist.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DirectorySearch;
