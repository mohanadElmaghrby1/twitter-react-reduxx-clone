const logger = (store) => (next) =>(action) =>{
    console.group(action.type)
        console.log('The action:')
        const returendVlue = next(action);
        console.log('The new state:', store.getState())
    console.groupEnd()
    return returendVlue;
}

export default logger;