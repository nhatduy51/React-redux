const redux =  require('redux');
const createStore = redux.reduxStore();

const initialState = {
    counter: 0
}

//store 
const store = createStore(rootReducer);
console.log(store.getState())
//reducer
const rootReducer = (action, state = initialState) => {

    switch (action) {
        case action.type === "INC_COUNTER":
            return {
                ...state,
                counter: state.counter + 1
            }
        case action.type === "ADD_COUNTER":
            return {
                ...state,
                counter: state.counter + action.payload
            }
    
        default:
            return state;
    }
}

//dispatching action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', payload: 10});
console.log(store.getState());

//subcription
store.subcribe( () => {
    console.log('[subcription]', store.getState())
})