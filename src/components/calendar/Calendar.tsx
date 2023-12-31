import React, { useRef, useEffect } from 'react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const FullCalendar = () => {
  const calendarRef = useRef(null);

  useEffect(() => {
    const calendar = new Calendar(calendarRef.current, {
      plugins: [dayGridPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      events: [
        { title: 'Event 1', date: '2023-02-28' },
        { title: 'Event 2', date: '2023-03-02' }
      ]
    });

    calendar.render();
  }, []);

  return (
    <div ref={calendarRef}></div>
  );
};

export default FullCalendar;