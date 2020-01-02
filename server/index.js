import express from 'express';
import routes from './routes/index.js';

const app = express();
const port = 3000;

app.use('/', routes);
app.listen(port, () => console.log('\x1b[36m', `CleverWatson listening on port ${port}!`));
