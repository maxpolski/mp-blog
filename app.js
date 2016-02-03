import express from 'express';
import router  from './routes';

const app = express();
const routes = new router();

app.get('/', (req, res) => routes.index(req, res));


export const run = module.exports.run = function () {
  app.listen(8080, `localhost`, function (req, res) {
    console.log('listening on port 8080');
  });
}
