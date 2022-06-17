import mongoose from 'mongoose';

interface TicketAttrs {
	ticketNum: number;
	fibNum: number;
}

interface TicketDoc extends mongoose.Document {
	ticketNum: number;
	fibNum: number;
}

interface TicketModel extends mongoose.Model<TicketDoc> {
	build(attrs: TicketAttrs): TicketDoc;
}

const ticketSchema = new mongoose.Schema({
	ticketNum: {
		type: Number,
		required: true,
		unique: true,
	},
	fibNum: {
		type: Number,
		required: true,
	},
});

const Ticket = mongoose.model<TicketDoc, TicketModel>('Ticket', ticketSchema);

export { Ticket };
