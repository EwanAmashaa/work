import React, { useContext } from 'react';
import { StoreContext } from '../contexts/StoreContext';

function EventSearch() {
  const { events } = useContext(StoreContext);

  if (!events || events.length === 0) {
    return <p>No events found.</p>;
  }

  return (
    <ul>
      {events.map(event => (
        <li key={event.id}>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default EventSearch;
