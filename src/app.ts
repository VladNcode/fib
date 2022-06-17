import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import { ticketRouter } from './routes/ticket.router';

const app = express();
const PORT = process.env.PORT || 3001;

if (!process.env.MONGO_URI) {
	// EXAMPLE: MONGO_URI=mongodb://root:example@mongosh:27017/
	throw new Error('MONGO_URI is required!');
}

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log('Connected to MongoDB'))
	.catch(err => console.error(err));

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

app.use('/', ticketRouter);

app.listen(PORT, () => {
	console.log('Listening on port ' + PORT);
});

export = app;
