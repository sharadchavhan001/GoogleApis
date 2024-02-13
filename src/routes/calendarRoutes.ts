// calendarRoutes.ts
import { FastifyInstance } from 'fastify';
import { getCalendars, getEvents } from '../controllers/calendarController';

function calendarRoutes(fastify: FastifyInstance): void {
    fastify.get("/calendars", getCalendars);
    fastify.get("/events", getEvents);
    // fastify.post("/events", addEvent);
}

export default calendarRoutes;
