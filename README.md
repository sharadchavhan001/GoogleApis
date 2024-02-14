## Google Calendar and Contacts Integration

This project integrates with Google Calendar and Google People APIs using Fastify and GraphQL, written in TypeScript.

**Instructions for Setup:**

a. Environment Setup: Ensure Node.js, npm, and TypeScript are installed on your system.

b. Google API Credentials: Obtain client ID, client secret, and redirect URL for OAuth2 authentication. Set up API credentials on the Google Developer Console.

c. Environment Variables: Create a .env file in the root directory of the project and add the necessary environment variables (e.g., CLIENT_ID, CLIENT_SECRET, REDIRECT_URL).

d. Installation: Run npm install in the root directory to install dependencies.

e. Compile TypeScript: Use the TypeScript compiler (tsc) to compile TypeScript files into JavaScript. You can set up a build script in your package.json to automate this process.

f. Starting Services and Gateway: Start each service (Google Calendar and Google People) and the gateway server using node command with the compiled JavaScript files.


## Setup Instructions

1. Clone the repository:

    ```bash
    git clone https://github.com/sharadchavhan001/GoogleApis.git
    ```

2. Navigate to the project directory:

    ```bash
    cd project
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a .env file in the root directory and add the following environment variables:

    ```plaintext
    CLIENT_ID=<your-client-id>
    CLIENT_SECRET=<your-client-secret>
    REDIRECT_URL=<your-redirect-url>
    PORT=<port-number>

    Replace <your-client-id>, <your-client-secret>, <your-redirect-url>, and <port-number> with your actual Google OAuth2 client ID, client secret, redirect URL, and the desired port number, respectively.
    ```
    

5. Compile TypeScript files:

    ```bash
    npm run build
    ```

6. Start the services and gateway:

    ```bash
    npm start
    ```

7. Access the GraphQL endpoint:

    ```
    http://localhost:PORT/graphql
   
    # If getting error try below one
     
    http://localhost:PORT/graphiql
    ```


## API Endpoints

- `/graphql`: GraphQL endpoint for querying Google Calendar events and Google People contacts.

## Dependencies

- Fastify
- GraphQL
- Googleapis


## Usage Examples
1. Authentication
    Navigate to the root URL (/) of the application.
    You will be redirected to the Google OAuth consent screen to grant permissions.
    After granting permission, you will be redirected back to the application.
2. Fetch Calendars
    Send a GET request to /calendars.
    This endpoint will retrieve a list of calendars associated with the authenticated user's Google account.
3. Fetch Events
    Send a GET request to /events.
    This endpoint will retrieve a list of upcoming events from the primary calendar of the authenticated user.
4. Add Event
    Send a POST request to /events with the following JSON payload:
     ```bash
    {
      "summary": "Event Summary",
      "start": "2024-02-15T10:00:00",
      "end": "2024-02-15T12:00:00"
    }
    ```

    Adjust the summary, start, and end values as needed.
    This endpoint will add the specified event to the primary calendar of the authenticated user.

5. Fetch Contacts
    Send a GET request to /contacts.
    This endpoint will retrieve a list of contacts from the authenticated user's Google Contacts.

6. GraphQL API
    Access the GraphQL API at /graphiql endpoint.
    Use the GraphiQL interface to execute queries, mutations, and subscriptions against the defined schema.

**Additional Notes**
1. Ensure that your Google OAuth2 credentials (client ID, client secret, and redirect URL) are correctly configured and match the information provided in your GCP project.
2. Make sure to handle errors gracefully, especially when interacting with external APIs.
