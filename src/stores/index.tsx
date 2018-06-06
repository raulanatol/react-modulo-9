import { CounterStore } from './CounterStore';
import { MoviesStore } from './MoviesStore';
import { ModalStore } from './ModalStore';
import { UserStore } from './UserStore';

const stores = {
  counterStore: new CounterStore(),
  moviesStore: new MoviesStore(),
  modalStore: new ModalStore(),
  userStore: new UserStore()
};

export default stores;
