import morgan from 'morgan';

//eslint-disable-next-line @typescript-eslint/no-explicit-any
const setupLogging = (server: any) => {
  server.use(morgan('combined'));
};

export default setupLogging;