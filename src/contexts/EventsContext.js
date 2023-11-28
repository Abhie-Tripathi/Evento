"use client"
import { createContext, useContext, useState } from "react";

const EventsContext = createContext({
  events : null,
  setEvents: ()=>{}
});

export function EventsProvider({ children }) {
  const [events, setEvents] = useState([])

  return (
    <EventsContext.Provider
      value={{
        events: events,
        setEvents: setEvents
      }}
    >
      {children}
    </EventsContext.Provider>
  );
}

export function useEventsContext() {
  return useContext(EventsContext);
}
