import * as  actionTypes from './actions/action';

const initialState = {
  counter: 0,
  result: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
        const newState = Object.assign({}, state);
        newState.counter = state.counter + 1;
        return newState;

    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };

    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + 5,
      };

    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - 5,
      };

    case actionTypes.STORE_RESULT:
        return {
            ...state,
            result: state.result.concat({id: new Date(),value:state.counter})
        }
  }
  
  return state;
};

export default reducer;
