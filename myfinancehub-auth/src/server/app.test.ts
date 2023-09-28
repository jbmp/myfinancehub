import { jestSetupServer, request } from '../../tests/test.setup';

jestSetupServer();

describe('Server', () => {
  it('has a module', () => {
    expect(request).toBeDefined();
  });

  it('returns Hello World by default', async () => {
    const res = await request.get('/');
    expect(res.status).toBe(200);
    expect(res.text).toEqual('Hello World, Jorge Bras!');
  });
});