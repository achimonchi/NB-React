const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    value : 0,
    todo : []
}

// Reducer
// berfungsi untuk merubah value di store
const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case "ADD_TODO" :
            return {
                ...state,
                todo : [...state.todo, action.todo]
            }
        case "REMOVE_TODO" :
            const todoNow = [...state.todo];
            const removeTodo = todoNow.filter((t)=>t !== action.todo);
            return {
                ...state,
                todo : removeTodo
            }
    }
    return state;
}

// Store
const store = createStore(rootReducer);
console.log(store.getState())




// Subscription
// 
store.subscribe(()=>{
    console.log('store change : ', store.getState());
});

// Dispatching Action
// berfungsi sebagai pemanggilan instruksi yang ada di reducer.
// misal, typenya adalah ADD_DATA, maka reducer
// akan mengeksekusi sesuai dengan yang dipilih dispatch action
store.dispatch({type:"ADD_TODO", todo:"Minum"});

store.dispatch({type:"ADD_TODO", todo:"Makan"});

store.dispatch({type:"REMOVE_TODO", todo:"Minum"});