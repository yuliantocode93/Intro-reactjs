import * as counter from "./constants";

export const increment = (value) => {
  return {
    type: counter.INC,
    value: value,
  };
};

export const decrement = (value) => {
  return {
    type: counter.DEC,
    value: value,
  };
};

export const decrementWitchCheckingAction = (value) => {
  return (dispath, getState) => {
    if (getState().counter.count > 0) {
      dispath(decrement(value));
    }
  };
};
