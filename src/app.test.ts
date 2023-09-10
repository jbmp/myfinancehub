import  { server } from './server/server';
import supertest from 'supertest';

export const testServer = supertest(server);

  describe('Route testing', () => {
    it('Should return an http 200 and a "message" property (route: GET /)', async () => {
            const res = await testServer.get('/')

            expect(res.statusCode).toBe(200);
            console.log(res.body);
            expect(res.body).toEqual({name:"BENFICA"});
        })
  })


  describe('Only one test', () => {
    it('Sum 1 + 1 = 2', () => {
      expect(1 + 1).not.toBe(5)
    })
  })