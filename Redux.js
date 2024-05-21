const store=Redux.createStore(reducer)
let currentState= store.getState()
let action={
    type:'LOGIN'
}

function actionCreator(){
    return action;
}
store.dispatch(loginAction())
if (action.type==="LOGIN") {
    return{
        login:true}
} else {
    return State
}
const authReducer=(state=defaultState,action)=>{
    switch(actiontype){
        case 'LOGIN':
            return {
                authenticated:false
            }
            default: return defaultState
        }
        
}