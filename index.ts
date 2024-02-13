// index.ts
import fastify from 'fastify';
import { loadRoutes } from './src/routes/';
import dotenv from 'dotenv';
import mercurius from 'mercurius';
import {typeDefs} from './src/graphql/schema';
import {resolvers} from './src/graphql/resolvers';
import { GraphQLSchema } from 'graphql'; // Import the GraphQLSchema type
import { makeExecutableSchema as makeExecutableSchemaFromTools} from 'graphql-tools'; // Import makeExecutableSchema function

dotenv.config();

const app = fastify({ logger: true });

// Load routes
loadRoutes(app);


// Create a GraphQLSchema object
const schema:GraphQLSchema = makeExecutableSchemaFromTools({ typeDefs, resolvers });

// Register Mercurius GraphQL plugin with Fastify
app.register(mercurius, {
    schema,
    graphiql: true, // Enable GraphiQL for testing purposes
  });

// Start server
app.listen({port:4000}, (err) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`Server is running on port ${process.env.PORT}`);
});
function makeExecutableSchema(arg0: { typeDefs: any; resolvers: any; }): string | string[] | import("graphql").GraphQLSchema | undefined {
    throw new Error('Function not implemented.');
}

