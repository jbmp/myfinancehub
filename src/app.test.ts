import mongoose from 'mongoose';
import  User from '../src/models/user';
import {server } from './server/server';
import request from 'supertest';

const {
  MONGO_USERNAME = 'dev_user',
  MONGO_PASSWORD = 'dev_password',
  MONGO_HOSTNAME = 'auth-api-db',
  MONGO_PORT = '27017'
} = process.env;
 
// Tests for database purposes

const url: string = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/jorge_teste_db?authSource=admin`;

mongoose.connect(url);

describe('User Model Test', () => {
  beforeAll(async () => {
    await User.deleteMany({});
  });

  afterEach(async () => {
    await User.deleteMany({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('has a module', () => {
    expect(User).toBeDefined();
  });

  it('create user', async () => {
    const user = new User({
      name: 'Jorge',
      username: 'jorge',
      password: '123456123123sdsas',
      email: 'jorge@bras.com'
    });
    const savedUser = await user.save();
    
    const foundUser = await User.findOne({ name: savedUser.name }) || { name: '' };
    const expected = 'Jorge';
    const actual = foundUser.name;
    expect(actual).toEqual(expected);
  });
});


// Test for routes purposes

describe('App test', () => {
  it('has a module', () => {
    expect(server).toBeDefined();
  });

  afterEach(async () => {
    await mongoose.connection.close();
  });

  afterAll(() => {
    mongoose.connection.close();
  });

  describe('User routes', () => {
    it('can list users', async () => {
      const res = await request(server).get('/users');
      expect(res.status).toBe(200);
      
    });
  });
});