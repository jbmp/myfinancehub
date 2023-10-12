import { createProxyMiddleware } from 'http-proxy-middleware';

//eslint-disable-next-line @typescript-eslint/no-explicit-any
const setupProxies = (server: any, routes: any) => {
  routes.forEach( r => {
    server.use(r.url, createProxyMiddleware(r.proxy));
  });
};

export default setupProxies;