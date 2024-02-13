// calendarController.ts
import { FastifyRequest, FastifyReply } from 'fastify';
import { google } from 'googleapis'; // Import necessary Google APIs here
import dotenv from 'dotenv';

dotenv.config();

// Define OAuth2 client with credentials
const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URL
);
const calendar = google.calendar({ version: "v3", auth: oauth2Client });

export const getCalendars = async (req: FastifyRequest, res: FastifyReply): Promise<void> => {
    try {
        // Your logic to fetch calendars from Google Calendar API
        const response = await calendar.calendarList.list({});
        const calendars = response.data.items;
        console.log("Calendars:", calendars);
        res.send(calendars);
    } catch (error) {
        console.error("Error fetching calendars:", error);
        res.status(500).send({ error: "Failed to fetch calendars" });
    }
};

export const getEvents = async (req: FastifyRequest, res: FastifyReply): Promise<void> => {
    try {
        // Your logic to fetch events from Google Calendar API
        const response = await calendar.events.list({
            calendarId: 'primary',
            timeMin: new Date().toISOString(),
            maxResults: 10,
            singleEvents: true,
            orderBy: 'startTime',
        });
        const events = response.data.items;
        console.log("Events:", events);
        res.send(events);
    } catch (error) {
        console.error("Error fetching events:", error);
        res.status(500).send({ error: "Failed to fetch events" });
    }
};

// export const addEvent = async (req: FastifyRequest, res: FastifyReply): Promise<void> => {
//     try {
//         // Your logic to add an event to Google Calendar API
//         const { summary, start, end } = req.body;
//         // Construct event object
//         const event = {
//             summary,
//             start: { dateTime: start, timeZone: 'UTC' },
//             end: { dateTime: end, timeZone: 'UTC' },
//         };
//         // Call API to insert event
//         const response = await calendar.events.insert({
//             calendarId: 'primary',
//             resource: event,
//         });
//         const addedEvent = response.data;
//         console.log("Added event:", addedEvent);
//         res.send(addedEvent);
//     } catch (error) {
//         console.error("Error adding event:", error);
//         res.status(500).send({ error: "Failed to add event" });
//     }
// };
