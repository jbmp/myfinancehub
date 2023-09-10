import express from 'express';
import cors from 'cors';
import connectDB from '../config/db';
import router from '../routes/index';

//connectDB();
const server = express();


server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.get('/', (req, res) => {
  res.send('Hello World paddasd jorge bras!');
});
server.use('/', router);

export { server };