import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
global.dirname = __dirname;

const routesModule = join(global.dirname, 'routes', 'index.js');
const app = express();
const port = 3000;

var staticFilesOptions = {
  dotfiles: 'ignore',
  extensions: ['wav'],
  index: false,
  maxAge: '1h',
  redirect: false
};

(async () => {
  let routes = await import(routesModule);
  app.use('/', routes.default);
  app.use('/conversations', express.static('./src/conversations', staticFilesOptions));
  app.listen(port, () => console.log('\x1b[36m', `Free Integrations app listening on port ${port}!`));
})();
