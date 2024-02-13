// index.ts
import { FastifyInstance } from 'fastify';
import authRoutes from './authRoutes';
import calendarRoutes from './calendarRoutes';
import contactRoutes from './contactRoutes';

export function loadRoutes(fastify: FastifyInstance): void {
    authRoutes(fastify);
    calendarRoutes(fastify);
    contactRoutes(fastify);
}
