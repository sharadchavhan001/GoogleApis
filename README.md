Google Calendar and Contacts Integration
This project demonstrates how to integrate Google Calendar and Contacts APIs into a Node.js application using Fastify and GraphQL.

Prerequisites
Before running the application, make sure you have the following:

Node.js installed on your machine. You can download it from here.
Google Cloud Platform (GCP) project with the Calendar API and People API enabled. You can create a new project or use an existing one. Follow the steps here to create a new project and enable the necessary APIs.
Setup Instructions
Clone the repository:

bash
Copy code
git clone <repository-url>
Navigate to the project directory:

bash
Copy code
cd <project-directory>
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory of the project and add the following variables:

env
Copy code
CLIENT_ID=<your-client-id>
CLIENT_SECRET=<your-client-secret>
REDIRECT_URL=<your-redirect-url>
PORT=<port-number>
Replace <your-client-id>, <your-client-secret>, <your-redirect-url>, and <port-number> with your actual Google OAuth2 client ID, client secret, redirect URL, and the desired port number, respectively.

Start the application:

bash
Copy code
npm start
Access the application:

Once the server is running, you can access the application through a web browser or make requests to the provided endpoints.

Usage
Visit the root URL (e.g., http://localhost:<port>/) to authenticate with Google and grant access to your Google Calendar and Contacts.
Use the provided RESTful endpoints (/calendars, /events, /contacts, /events POST) to interact with the Google Calendar and Contacts APIs.
Access the GraphQL API at http://localhost:<port>/graphql to execute queries for fetching calendars, events, and contacts.
Additional Notes
Ensure that your Google OAuth2 credentials (client ID, client secret, and redirect URL) are correctly configured and match the information provided in your GCP project.
Make sure to handle errors gracefully, especially when interacting with external APIs.
