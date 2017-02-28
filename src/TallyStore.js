// Store is responsible for storing state and
// updating the application started

// register event with the dispatcher
import EventEmitter from 'EventEmitter';
import Dispatcher from './Dispatcher';

// private variable
// object literal - mutable!
const tally = {
    count: 0
};

const increment = () => {
    console.log('store: increment');
    tally.count += 1;
};

const decrement = () => {
    console.log('store: decrement');
    tally.count = tally.count - 1;
};

const zero = () => {
    console.log('store: zero');
    tally.count = 0;
};

const handleAction = (action) => {
    switch (action.type) {
        case 'INCREMENT':
            console.log('handleAction' + action.type);
            increment();
            break;
        case 'DECREMENT':
            console.log('handleAction' + action.type);
            decrement();
            break;
        case 'ZERO':
            console.log('handleAction' + action.type);
            zero();
            break;
        default:
            // nothing here to see
    }
    //setup for subscribers
    instance.emitChange();
};

Dispatcher.register(handleAction);

class TallyStore extends EventEmitter {

    getTally() {
        return Object.assign({},tally);
    }
    addChangeListener(callback) {
        this.addListener('CHANGE', callback);
    }
    removeChangeListener(callback){
        this.removeListener('CHANGE', callback);
    }

    emitChange() {
        this.emit('CHANGE');
    }
}


const instance = new TallyStore();
export default instance;
