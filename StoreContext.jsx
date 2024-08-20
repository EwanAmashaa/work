import React, { createContext, useState } from 'react';

export const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, { ...event, id: Date.now() }]);
  };

  const updateEvent = (updatedEvent) => {
    setEvents(events.map(event =>
      event.id === updatedEvent.id ? updatedEvent : event
    ));
  };

  return (
    <StoreContext.Provider value={{ events, addEvent, updateEvent }}>
      {children}
    </StoreContext.Provider>
  );
}
