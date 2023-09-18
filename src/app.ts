import { server } from './server/server';

const hostname = process.env.AUTH_API_HOST || '0.0.0.0';
const port = Number(process.env.AUTH_API_PORT) || 3000;

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

