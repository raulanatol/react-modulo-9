import ActionType from '../actions';
import { CounterState } from './index';

const initialState: CounterState = {
  value: 0
};

const counter = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return { ...state, value: state.value + action.delta };
    case 'DECREMENT_COUNTER':
      return { ...state, value: state.value - action.delta };
    default:
      return state;
  }
};
export default counter;
