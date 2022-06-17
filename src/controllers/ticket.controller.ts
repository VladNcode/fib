import { Request, Response } from 'express';
import { fib, fibHouse } from '../helpers/fib';
import { Ticket } from '../models/ticket.model';

export const input = async (req: Request, res: Response) => {
	const fibNum = req.body.number;
	const lastTicket = await Ticket.findOne().sort('-ticketNum');
	let ticketNum: number;

	if (!lastTicket) {
		ticketNum = 1;
	} else {
		ticketNum = lastTicket.ticketNum + 1;
	}

	if (!fibHouse[fibNum]) {
		const res = fib(fibNum);
		fibHouse[fibNum] = res;
	}

	await Ticket.create({ ticketNum, fibNum: fibHouse[fibNum] });

	res.status(201).json({ ticket: ticketNum });
};

export const output = async (req: Request, res: Response) => {
	const ticketNum = req.query.ticket;
	const ticket = await Ticket.findOne({ ticketNum });

	if (!ticket) {
		return res.status(404).json({ status: '404 Not Found' });
	}

	res.status(200).json({ fib: ticket.fibNum });
};
