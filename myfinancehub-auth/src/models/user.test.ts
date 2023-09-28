import User from './user';
import { jestSetupDb } from '../../tests/test.setup';
import  { factories } from '../../tests/factories';

jestSetupDb();

describe('User Model Test', () => {

  it('has a module', () => {
    expect(User).toBeDefined();
  });
  
  it('create user', async () => {
    const user = factories.user.build({name: 'Marco'});
    const savedUser = await User.create(user);
      
    const foundUser = await User.findOne({ name: savedUser.name }) || { name: '' };
    const expected = 'Marco';
    const actual = foundUser.name;
    expect(actual).toEqual(expected);
  });
});