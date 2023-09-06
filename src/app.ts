import express from 'express';
import cors from 'cors';
import connectDB from './config/db';
import router from './routes/index';

connectDB();
const app = express();
const hostname = process.env.AUTH_API_HOST || '0.0.0.0';
const port = Number(process.env.AUTH_API_PORT) || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('Hello World paddasd!');
});
app.use('/', router);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});