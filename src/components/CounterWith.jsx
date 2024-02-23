
// ********************** with mapStateToProps and mapDispatchToProps **********************

import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../action/index';

const CounterWith = (props) => {
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <button onClick={() => props.decrement(2)}>-</button>
      <div>{props.counterState}</div>
      <button onClick={() => props.increment(4)}>+</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
    counterState: state.incDec
  });
  
const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterWith);