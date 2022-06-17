import request from 'supertest';
import app from '../app';

const createTicket = async (number: number) => {
	const ticket = await request(app)
		.post('/input')
		.send({
			number,
		})
		.expect(201);

	return ticket.body;
};

const getFibNum = async (ticketNum: number) => {
	await request(app).get('/output').query({ ticket: ticketNum }).expect(200);
};

interface Ticket {
	ticket: number;
}

let ticket1: Ticket;
let ticket2: Ticket;
let ticket3: Ticket;

it('creates a ticket', async () => {
	ticket1 = await createTicket(5);
	ticket2 = await createTicket(10);
	ticket3 = await createTicket(7);
});

it('get a fib num by ticket', async () => {
	await getFibNum(ticket1.ticket);
	await getFibNum(ticket2.ticket);
	await getFibNum(ticket3.ticket);
});

it('should return 404 since ticket number does not exist', async () => {
	await request(app).get('/output').query({ ticket: Infinity }).expect(404);
});
