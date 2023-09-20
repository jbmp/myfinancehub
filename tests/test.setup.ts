/* eslint-disable no-console */

import mongoose from 'mongoose';
import supertest = require('supertest');
import { IncomingMessage, Server, ServerResponse } from 'http';
import { server } from '../src/server/server';


// DB Setup

const {
  MONGO_USERNAME = 'dev_user',
  MONGO_PASSWORD = 'dev_password',
  MONGO_HOSTNAME = 'auth-api-db',
  MONGO_PORT = '27017'
} = process.env;
const url: string = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/test_db?authSource=admin`;

async function removeAllCollections () {
  const collections = Object.keys(mongoose.connection.collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    await collection.deleteMany();
  }
}
  
async function dropAllCollections () {
  const collections = Object.keys(mongoose.connection.collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    try {
      await collection.drop();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // Sometimes this error happens, but you can safely ignore it
      if (error.message === 'ns not found') return;
      // This error occurs when you use it.todo. You can
      // safely ignore this error too
      if (error.message.includes('a background operation is currently running')) return;
      console.log(error.message);
    }
  }
}

export function jestSetupDb() {
  beforeAll(async() => {
    try {
      await mongoose.connect(url);
    } catch (err) {
      console.log('Error initializing db connection: ', err);
    }
  });
        
  afterAll(async() => {
    await dropAllCollections();
    await mongoose.connection.close();
  });
        
  beforeEach(() => {
  });
        
  afterEach(async () => {
    await removeAllCollections();
  });
}

// Server Setup

export const request = supertest(server);

export function jestSetupServer() {
  let test: Server<typeof IncomingMessage, typeof ServerResponse>;   

  beforeAll(async() => {
    test = server.listen(3000);
  });

  afterAll((done) => {
    test.close(done);
  });
}