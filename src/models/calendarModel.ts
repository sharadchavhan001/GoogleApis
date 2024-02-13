// calendarModel.ts

// Define the interface for a calendar item
interface Calendar {
    id: string;
    name: string;
    events: Event[];
  }
  
  // Define the interface for an event item
  interface Event {
    id: string;
    summary: string;
    description?: string;
    start: string;
    end: string;
  }
  
  // Example data for demonstration purposes
  const exampleCalendars: Calendar[] = [
    {
      id: '1',
      name: 'Work Calendar',
      events: [
        {
          id: '1',
          summary: 'Meeting with team',
          start: '2024-02-15T09:00:00',
          end: '2024-02-15T10:00:00',
        },
        {
          id: '2',
          summary: 'Lunch break',
          start: '2024-02-15T12:00:00',
          end: '2024-02-15T13:00:00',
        },
      ],
    },
    // Add more calendar items as needed
  ];
  
  export { Calendar, Event, exampleCalendars };
  