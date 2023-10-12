import { rateLimit }  from 'express-rate-limit';

//eslint-disable-next-line @typescript-eslint/no-explicit-any
const setupRateLimit = (server: any, routes: any) => {
  routes.forEach(r => {
    if (r.rateLimit) {
      server.use(r.url, rateLimit(r.rateLimit));
    }
  });
};

export default setupRateLimit;