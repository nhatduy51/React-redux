export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const ADD = 'ADD';
export const SUBTRACT = "SUBTRACT";
export const STORE_RESULT = "STORE_RESULT";

export const increment = () => {
    return {
        type: INCREMENT
    }
}
export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const add = () => {
    return {
        type: ADD
    }
}
export const subtract = () => {
    return {
        type: SUBTRACT
    }
}
export const saveResult = (res) => {
    return {
        type: STORE_RESULT,
        result: res
    }
}

export const storeResult = (res) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(res));
        }, 2000)
    }
}