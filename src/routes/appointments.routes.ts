import { request, response, Router } from 'express';

const appointmentsRouter = Router();

const appointments = [];
// POST http://localhost:3333/appointments
appointmentsRouter.post('/', (request, response) => {
  return response.json({ Message: 'Hello World' });
});

export default appointmentsRouter;
