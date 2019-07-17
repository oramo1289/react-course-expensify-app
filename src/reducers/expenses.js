// Reducer expenses
const expensesReducerDefaultState = [];

const expensesReducer = ( state = expensesReducerDefaultState, action ) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
          return [
              ...state,//toma los valores que ya estaban en el state
              action.expense//le agrega estos nuevos y crea una lista nueva sin modificar lo que ya existía
          ]

        case 'REMOVE_EXPENSE':
            return state.filter( ({ id }) => id !== action.id )
        
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                    ...expense,
                    ...action.updates
                    };
                } else {
                    return expense;
                };
            });
                    
        default:
          return state;  
    }
};

export default expensesReducer;