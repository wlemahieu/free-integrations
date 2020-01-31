import cors from 'cors';
import express from 'express';
import { getVoices, postInput } from 'modules/Chat/index.js';

const router = express.Router();
const corsOptions = {
	origin: 'http://localhost:3001',
	optionsSuccessStatus: 200
};

router.get('/chat', cors(corsOptions), (req, res) => getVoices(res));
router.post('/chat', cors(corsOptions), (req, res) => postInput(req.query, res));
// router.get('/news', (req, res) => newsSources(res));

export default router;
