const initialState= {count:0}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'INCREMENT':
            console.log('Increment action dispatched')
            return {...state,count:state.count+1}
            case 'DECREMENT':
                console.log('Decrement action dispatched')
            return {...state,count:state.count-1}
        default:
            return state;
    }
}  

//let store = Redux.createStore(counter);
 const createStore = (reducer)=>{
    let state = null;
    const listeners = [];
 
 const getState =()=> state;

 const dispatch = (action)=> {
    state = reducer(state, action);
    console.log('New state',state)
    listeners.forEach(listener=> listener());
 }
 const subscribe = (listener)=>{
    listeners.push(listener);
    return()=>{
        listeners = listeners.filter(l=> l !== listener);
    }
}
dispatch({});
console.log('initial state',state)
return {getState,dispatch, subscribe}
}
let store = createStore(reducer)