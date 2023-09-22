import { Factory } from 'fishery';
import { faker } from '@faker-js/faker';
import { IUser } from '../src/models/user';

const userFactory = Factory.define<IUser>(() => ({
  name: faker.person.fullName(),
  username: faker.internet.userName(),
  password: faker.internet.password(),
  email: faker.internet.email(),
  active: faker.number.int(1),
  created_at: faker.date.anytime(),
  updated_at: faker.date.anytime(),
  deleted_at: null,
}));

export const factories = {
  user: userFactory,
};