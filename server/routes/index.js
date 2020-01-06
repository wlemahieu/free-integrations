import cors from 'cors';
import express from 'express';
import { processInput } from '../modules/Chat/user-input/index.js';
// import { newsSources } from '../newsapi/index.js';

const router = express.Router();
const corsOptions = {
	origin: 'http://localhost:3001',
	optionsSuccessStatus: 200
};

router.post('/chat', cors(corsOptions), (req, res) => processInput(req.query, res));
// router.get('/news', (req, res) => newsSources(res));

export default router;
