/*
a function for actions performed on the Redux store.
store.dispatch passes in a state and action, but only the action needs to be defined in the params for dispatch()
determines the action type and acts accordingly
*/

const exampleReducerDefaultState = [];
const exampleReducer = (state = exampleReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            //returns the current expense array of state and adds the action.expense object
            return [...state, action.expense]
        case 'REMOVE_EXPENSE':
            //filters through the state expense array with ID and returns a new array with the returns from the arrow function
            return state.filter(({ id }) => id !== action.id);
        default:
            return state;
    }
};

export default expensesReducer;