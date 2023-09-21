import { Factory } from 'fishery';
import {IUser} from '../src/models/user';

const userFactory = Factory.define<IUser>(() => ({
  name: 'Jorge',
  username: 'jorge',
  password: '123456123123sdsas',
  email: 'jorge@bras.com',
  active: 1,
  created_at: new Date(Date.now()),
  updated_at: new Date(Date.now()),
  deleted_at: null,
}));

export const factories = {
  user: userFactory,
};