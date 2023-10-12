import express from 'express';
import cors from 'cors';
import setupLogging from '../middlewares/loggins';
import setupProxies from '../middlewares/proxy';
import setupRateLimit from '../middlewares/ratelimit';
import routes from '../routes/routes';


const server = express();
server.use(cors());
setupLogging(server);
setupRateLimit(server,routes);
setupProxies(server, routes);



server.get('/hello', (req, resp) => {
  return resp.send('HELLO WORLD!');
});

export default server;