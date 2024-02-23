// ********************** with useSelector and useDispatch **********************

import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../action/index';

const CounterWithout = () => {
  const counterState = useSelector((state) => state.incDec);
  const dispatch = useDispatch();
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <button onClick={() => {dispatch(decrement(2))}}>-</button>
      <div>{counterState}</div>
      <button onClick={() => {dispatch(increment(4))}}>+</button>
    </div>
  )
}

export default CounterWithout;