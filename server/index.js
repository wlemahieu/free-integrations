import express from 'express';
import routes from './routes/index.js';

const app = express();
const port = 3000;

var staticFilesOptions = {
  dotfiles: 'ignore',
  extensions: ['wav'],
  index: false,
  maxAge: '1h',
  redirect: false
};

app.use('/', routes);
app.use(express.static('conversations', staticFilesOptions));
app.listen(port, () => console.log('\x1b[36m', `Rose-Watson-Bot listening on port ${port}!`));
