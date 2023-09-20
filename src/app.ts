import connectDB from './config/db';
import { server } from './server/server';

connectDB();
const hostname = process.env.AUTH_API_HOST || '0.0.0.0';
const port = Number(process.env.AUTH_API_PORT) || 3000;

server.listen(port, hostname, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at http://${hostname}:${port}/`);
});

