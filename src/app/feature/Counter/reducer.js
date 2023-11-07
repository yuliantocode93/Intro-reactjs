import * as counter from './constants';

let intialState = {
  count: 0,
};

const CounterReducer = (state = intialState, action) => {
  switch (action.type) {
    case counter.INC:
      return {
        ...state,
        count: state.count + action.value,
      };
    case counter.DEC:
      return {
        count: state.count - action.value,
      };
    default:
      return state;
  }
};
export default CounterReducer;
