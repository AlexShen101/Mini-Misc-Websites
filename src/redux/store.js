import { createStore, combineReducers } from 'redux';


const store = createStore()

store.subscribe(() => {
    console.log(store.getState());
})

export default store;
