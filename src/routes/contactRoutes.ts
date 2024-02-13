// contactRoutes.ts
import { FastifyInstance } from 'fastify';
import { getContacts } from '../controllers/contactController';

function contactRoutes(fastify: FastifyInstance): void {
    fastify.get("/contacts", getContacts);
}

export default contactRoutes;
