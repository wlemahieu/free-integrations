import express from 'express';
import cors from 'cors';
import scraper from '../scraper/index.js';

const router = express.Router();
const corsOptions = {
	origin: 'http://localhost:3001',
	optionsSuccessStatus: 200
};

router.post('/', cors(corsOptions), (req, res, next) => {
	const input = req.query.payload;
	scraper(input)
		.then(response => {
			res.send(response);
		})
		.catch(error => {
			console.log('error ', error);
		})
		.finally(() => {
			// console.log('finally finished');
		});
});

export default router;
