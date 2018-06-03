import { action, observable } from 'mobx';

export class CounterStore {
  @observable counter: number = 0;

  @action increment(delta: number) {
    this.counter = this.counter + delta;
  }

  @action decrement(delta: number) {
    this.counter = this.counter - delta;
  }
}
