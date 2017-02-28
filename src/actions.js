// Updated for Redux
// No need for a dispatcher
export const increment = () => {
    console.log('action: INCREMENT');
    const action = {type: 'INCREMENT'};
    return action;
};


export const decrement = () => {
    console.log('action: DECREMENT');
    const action = {type: 'DECREMENT'};
    return action
};


export const zero = () => {
    console.log('action: ZERO');
    const action = {type: 'ZERO'};
    return action;
    
};
