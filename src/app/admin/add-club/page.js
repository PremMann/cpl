'use client';

import { useState } from 'react';

export default function AddClub() {
  const [name, setName] = useState('');
  const [stateId, setStateId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/admin/add-club', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, stateId }),
    });
    setName('');
    setStateId('');
  };

  return (
    <div>
      <h1>Add Club</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Club Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="State ID"
          value={stateId}
          onChange={(e) => setStateId(e.target.value)}
        />
        <button type="submit">Add Club</button>
      </form>
    </div>
  );
}