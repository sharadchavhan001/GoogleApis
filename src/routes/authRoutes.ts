
// authRoutes.ts
import { FastifyInstance } from 'fastify';
import { login, callback } from '../controllers/authController';

function authRoutes(fastify: FastifyInstance): void {
    fastify.get("/", login);
    fastify.get("/callback", callback);
}

export default authRoutes;
