// Store is responsible for storing state and
// updating the application started
import { createStore } from 'redux';
// private variable
// object literal - mutable!
const initialState = {
    count: 0
};

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            console.log('handleAction' + action.type);
            // application state must not be mutated
            // this is not allowed: state.count = state.count + 1
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            console.log('handleAction' + action.type);
            return {
                count: state.count - 1
            };
        case 'ZERO':
            console.log('handleAction' + action.type);
            return {
                count: 0
            };
        default:
            console.log('handleAction: default');
            // sets the intial value
            return state;
    }
    // emit change is not allowed
    // instance.emitChange();
}

export default createStore(countReducer);
