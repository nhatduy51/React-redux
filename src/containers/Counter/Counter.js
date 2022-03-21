import React, { Component } from "react";
import { connect } from "react-redux";
// import * as  actionTypes from '../../store/actions/action';
import {increment, decrement, add, subtract, storeResult} from '../../store/actions/action';
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
 
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.OnIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.OnDecrementcounter}
        />
        <CounterControl label="Add 5" clicked={this.props.OnAddCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.OnSubtractCounter}
        />
        <hr />
        <button onClick={() => this.props.OnStoreResult(this.props.ctr)}>Store result</button>
        <ul>
          {this.props.storeResult.map((strResunlt) => (
            <li key={strResunlt.id} onClick={this.props.OnDeleteResult}>
              {strResunlt.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    storeResult: state.res.result,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    OnIncrementCounter: () => dispatch(increment()),
    OnDecrementcounter: () => dispatch(decrement()),
    OnAddCounter: () => dispatch(add()),
    OnSubtractCounter: () => dispatch(subtract()),
    OnStoreResult: (result) => dispatch(storeResult(result)),
    // OnDeleteResult: () => dispatch({ type: "DELETE_RESULT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
