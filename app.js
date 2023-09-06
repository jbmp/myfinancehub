const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

connectDB();
const app = express();
const hostname = process.env.AUTH_API_HOST || '0.0.0.0';
const port = process.env.AUTH_API_PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/', require('./routes/index'));

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});