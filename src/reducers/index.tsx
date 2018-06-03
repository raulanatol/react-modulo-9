import { combineReducers } from 'redux';
import counter from './counter';

export interface CounterState {
  value: number;
}

export interface AppState {
  counter: CounterState
}

export default combineReducers({
  counter
});
