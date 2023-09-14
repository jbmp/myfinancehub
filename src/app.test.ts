import  { server } from './server/server';
import supertest from 'supertest';
import * as db from './tests/dbTest';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { MongoClient } from 'mongodb';

export const testServer = supertest(server);

  describe('Route testing', () => {
    it('Should return an http 200 and a "message" property (route: GET /)', async () => {
            const res = await testServer.get('/')

            expect(res.statusCode).toBe(200);
            expect(res.body).toEqual({name:"Hello World paddasd jorge bras!"});
        })
  });


  describe('Only one test', () => {
    it('Sum 1 + 1 = 2', () => {
      expect(1 + 1).not.toBe(5)
    })
  });

  describe('Test request with mongoose', () => {
    beforeAll(async () => {
       await db.connect()
    });
    afterEach(async () => {
       await db.clearDatabase()
    });
    afterAll(async () => {
       await db.closeDatabase()
    });

    test('GET - /', async () => {
       const res = await testServer.get('/');
       const body = res.body;
       const message = body.message;
       expect(res.statusCode).toBe(200);
       expect(message).toBe('Hello World!');
    });
 });

//  describe('Single MongoMemoryServer', () => {
//   let con: MongoClient;
//   let mongoServer: MongoMemoryServer;

//   beforeAll(async () => {
//     mongoServer = await MongoMemoryServer.create();
//     con = await MongoClient.connect(mongoServer.getUri(), {});
//   });

//   afterAll(async () => {
//     if (con) {
//       await con.close();
//     }
//     if (mongoServer) {
//       await mongoServer.stop();
//     }
//   });

//   it('should successfully set & get information from the database', async () => {
//     const db = con.db(mongoServer.instanceInfo!.dbName);

//     expect(db).toBeDefined();
//     const col = db.collection('test');
//     const result = await col.insertMany([{ a: 1 }, { b: 1 }]);
//     expect(result.insertedCount).toStrictEqual(2);
//     expect(await col.countDocuments({})).toBe(2);
//   });
// });