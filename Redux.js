const initialState= {count:0}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD':
            return {...state,count:state.count+1}
            case 'SUBTRACT':
            return {...state,count:state.count-1}
            case 'RESET':
                return {...state,count:0}
        default:
            return state;
    }
} ; 

 const createStore = (reducer)=>{
    let state;
    const listeners = [];
 
 const getState =()=> state;

 const dispatch = (action)=> {
    state = reducer(state, action);
    listeners.forEach(listener=> listener());
 }
 const subscribe = (listener)=>{
    listeners.push(listener);
    return()=>{
        listeners = listeners.filter(l=> l !== listener);
    }
}
dispatch({});

return {getState,dispatch, subscribe}
}
const store = createStore(reducer)
    console.log(store.getState())

store.dispatch({type:'ADD'});
store.dispatch({type:'ADD'});
console.log(store.getState())

store.dispatch({type:'SUBTRACT'});
console.log(store.getState())

store.dispatch({type:'RESET'});
console.log(store.getState())