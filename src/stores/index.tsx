import { CounterStore } from './CounterStore';
import { MoviesStore } from './MoviesStore';
import { ModalStore } from './ModalStore';

const stores = {
  counterStore: new CounterStore(),
  moviesStore: new MoviesStore(),
  modalStore: new ModalStore()
};

export default stores;
