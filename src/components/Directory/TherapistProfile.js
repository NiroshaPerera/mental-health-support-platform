import React from 'react';
import { useParams } from 'react-router-dom';

const therapists = {
  1: { name: 'Dr. Jane Doe', specialty: 'Anxiety', location: 'New York, NY', bio: 'Expert in anxiety management.' },
  2: { name: 'Dr. John Smith', specialty: 'Depression', location: 'Los Angeles, CA', bio: 'Specializes in treating depression.' },
  3: { name: 'Dr. Emily Johnson', specialty: 'Stress Management', location: 'Chicago, IL', bio: 'Helps with stress management and relaxation techniques.' }
};

const TherapistProfile = () => {
  const { id } = useParams();
  const therapist = therapists[id];

  if (!therapist) {
    return <p>Therapist not found.</p>;
  }

  return (
    <div>
      <h1>{therapist.name}</h1>
      <p>Specialty: {therapist.specialty}</p>
      <p>Location: {therapist.location}</p>
      <p>{therapist.bio}</p>
      <button>Contact Therapist</button>
    </div>
  );
};

export default TherapistProfile;
