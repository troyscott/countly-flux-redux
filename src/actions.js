import Dispatcher from './Dispatcher';

export const increment = () => {
    console.log('action: INCREMENT');
    const action = {type: 'INCREMENT'};
    Dispatcher.dispatch(action);

};


export const decrement = () => {
    console.log('action: DECREMENT');
    const action = {type: 'DECREMENT'};
    Dispatcher.dispatch(action);

};


export const zero = () => {
    console.log('action: ZERO');
    const action = {type: 'ZERO'};
    Dispatcher.dispatch(action);

};
