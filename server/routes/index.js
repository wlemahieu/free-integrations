import express from 'express';
import cors from 'cors';
const router = express.Router();
const corsOptions = {
	origin: 'http://localhost:3001',
	optionsSuccessStatus: 200
};

router.post('/', cors(corsOptions), (req, res, next) => {
	const input = req.query.input;
	console.log('input ', input);
	res.send(`Input Received (${input}) Responding Shortly...`);
});

export default router;
