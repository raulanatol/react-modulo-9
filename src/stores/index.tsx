import { CounterStore } from './CounterStore';
import { MoviesStore } from './MoviesStore';

const stores = {
  counterStore: new CounterStore(),
  moviesStore: new MoviesStore()
};

export default stores;
