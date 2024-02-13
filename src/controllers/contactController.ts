// contactController.ts
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
const people = google.people({ version: "v1", auth: oauth2Client });

export const getContacts = async (req: FastifyRequest, res: FastifyReply): Promise<void> => {
    try {
        // Your logic to fetch contacts from Google People API
        const response = await people.people.connections.list({
            resourceName: 'people/me',
            personFields: 'names,emailAddresses,phoneNumbers',
        });
        const contacts = response.data.connections;
        console.log("Contacts:", contacts);
        res.send(contacts);
    } catch (error) {
        console.error("Error fetching contacts:", error);
        res.status(500).send({ error: "Failed to fetch contacts" });
    }
};
