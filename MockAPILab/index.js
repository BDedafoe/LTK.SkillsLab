import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan'
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
import loanRoutes from './routes/loans.js'
import Loan from './models/Loan.js'
import { loans } from './mockData/index.js'

dotenv.config();
const app = express();
app.use(morgan("common"));
app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));

app.use('/loans', loanRoutes);

app.get('/', (req, res) => {
    res.json({
		message: "✨ 👋🌏 ✨",
		stage: process.env.NODE_ENV,
	});
});

//get all loans
app.get('/loans', (req, res) => {
	res.json(loans);
  });

const PORT = process.env.PORT || 3000;
mongoose.connect(
	process.env.MONGO_URL, {
		useNewURLParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
		// Loan.insertMany(loans); only use once when adding mock data
	})
	.catch((err) => console.log(`${err} did not connect`));

