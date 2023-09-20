import User from './user';
import { jestSetupDb } from '../../tests/test.setup';

jestSetupDb();

describe('User Model Test', () => {
  beforeAll(async () => {
    //await User.deleteMany({});
  });
  
  afterEach(async () => {
    //await User.deleteMany({});
  });
  
  afterAll(async () => {
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