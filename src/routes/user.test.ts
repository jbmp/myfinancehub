//import User from './user';
import { jestSetupDb, jestSetupServer, request } from '../../tests/test.setup';

jestSetupDb();
jestSetupServer();

describe('User routes', () => {
  it('can list users', async () => {
    const res = await request.get('/users');
    expect(res.status).toBe(200);
  });
});