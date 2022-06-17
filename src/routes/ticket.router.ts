import { input, output } from '../controllers/ticket.controller';

const express = require('express');
export const ticketRouter = express.Router();

ticketRouter.get('/output', output);
ticketRouter.post('/input', input);
