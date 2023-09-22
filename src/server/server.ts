import express from 'express';
import cors from 'cors';
import router from '../routes/index';

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.get('/', (req, res) => {
  res.send('Hello World, Jorge Bras!');
});
server.use('/', router);

export { server };