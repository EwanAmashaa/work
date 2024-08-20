import React, { useState, useContext } from 'react';
import { StoreContext } from '../contexts/StoreContext';

function EventForm({ currentEvent, onClose }) {
  const { addEvent, updateEvent } = useContext(StoreContext);
  const [title, setTitle] = useState(currentEvent ? currentEvent.title : '');
  const [description, setDescription] = useState(currentEvent ? currentEvent.description : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentEvent) {
      updateEvent({ ...currentEvent, title, description });
    } else {
      addEvent({ title, description });
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Event Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Event Description"
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default EventForm;
