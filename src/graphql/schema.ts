// schema.ts
// import { gql } from 'mercurius';

export const typeDefs = `
  type Event {
    id: ID!
    summary: String!
    description: String
    start: String!
    end: String!
  }

  type Calendar {
    id: ID!
    name: String!
    events: [Event!]!
  }

  type Contact {
    resourceName: String!
    displayName: String
    mobile: String
  }

  type Query {
    calendars: [Calendar!]!
    events: [Event!]!
    contacts: [Contact!]!
  }
`;