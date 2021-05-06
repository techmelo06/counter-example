import { COUNTER } from '../../types';



export function setIncrement(value) {
  let count = value;
  return {
    type: COUNTER,
    payload: count,
  };
}


export function setDecrement(value) {
  let count = value;
  return {
    type: COUNTER,
    payload: count,
  };
}