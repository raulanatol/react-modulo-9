import { action, observable } from 'mobx';
import User from '../model/User';

export class UserStore {
  @observable user: User = { _id: '1', admin: false };
}
