
class Dispatcher {

    constructor() {
        this.isDispatching - false;
        this.actionHandlers = [];
    }

    dispatch(action){
        console.log('Dispatching ' + action.type);
        if (this.isDispatching){
            throw new Error("I am busy bitches!");
        }
        this.isDispatching = true;
        //TODO: Pass to Stores
        this.actionHandlers.forEach(handler => handler(action));
        this.isDispatching = false;
    }
    register(actionHandler) {
        this.actionHandlers.push(actionHandler);
    }
}

export default new Dispatcher();
