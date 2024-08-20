import React, { useState } from 'react';
import EventForm from './EventForm';

function EventList() {
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);

  const handleAddEvent = (event) => {
    setEvents([...events, { ...event, id: Date.now() }]);
  };

  const handleEditEvent = (updatedEvent) => {
    setEvents(events.map(event => event.id === updatedEvent.id ? updatedEvent : event));
    setEditingEvent(null);
  };

  const handleDeleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  return (
    <div className="event-list">
      <EventForm onSave={editingEvent ? handleEditEvent : handleAddEvent} event={editingEvent} />
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <span>{event.title} - {event.date}</span>
            <button onClick={() => setEditingEvent(event)}>Edit</button>
            <button onClick={() => handleDeleteEvent(event.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
