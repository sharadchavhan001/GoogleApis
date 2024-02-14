// resolvers.ts
import { MercuriusContext } from 'mercurius';
import { google } from 'googleapis';

import { oauth2Client } from '../controllers/authController';

const calendar = google.calendar({ version: "v3", auth: oauth2Client });
const people = google.people({ version: "v1", auth: oauth2Client });

export const resolvers = {
  Query: {
    calendars: async (_: any, __: any, context: MercuriusContext) => {
      try {
        const response = await calendar.calendarList.list({});
        const calendars = response.data.items; // Specify the type
        return calendars;
      } catch (error) {
        console.error("Error Fetching calendars ", error);
        throw new Error("Failed to fetch calendars");
      }
      return []; // Placeholder for demonstration
    },
    events: async (_: any, __: any, context: MercuriusContext) => {
      try {
        const response = await calendar.events.list({
          calendarId: 'primary',
          timeMin: new Date().toISOString(),
          maxResults: 10,
          singleEvents: true,
          orderBy: 'startTime',
        });
        const events = response.data.items;
        // console.log("events -> ", events.join(", "));
        return events;
      } catch (error) {
        console.error("Error Fetching events ", error);
        throw new Error("Failed to fetch events");
      }
    },
    contacts: async (_: any, __: any, context: MercuriusContext) => {
      try {
        const response = await people.people.connections.list({
          resourceName: 'people/me',
          personFields: 'names,phoneNumbers',
        });

        if (response.data && response.data.connections) {
          const contacts = response.data.connections.map((contact: any) => ({
            resourceName: contact.resourceName,
            displayName: contact.names ? contact.names[0].displayName : null,
            mobile: contact.phoneNumbers ? contact.phoneNumbers.find((number: { type: any; }) => number.type == 'mobile')?.value : null
          }));
          return contacts;
        }
      } catch (error) {
        console.error("Error Fetching contacts ", error);
        throw new Error("Failed to fetch contacts");
      }
    },
  },
};

