import { createStore, combineReducers } from 'redux';
import uuid from "uuid";

//-------ACTIONS
// ADD_EXPENSE

const addExpense = ( 
    {
         description = '', 
         note = '', 
         amount = 0, 
         createdAt = 0 
    } = {} 
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
// REMOVE_EXPENSE

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
// EDIT_EXPENSE

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
// SET_TEXT_FILTER
const setTextFilter = ( text = '' ) => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// SET_START_DATE
const setStartDate = ( startDate ) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET_END_DATE
const setEndDate = ( endDate ) => ({
    type: 'SET_END_DATE',
    endDate
});

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
            return state( ({ id }) => id !== action.id )
        
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

// Reducer filters

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = ( state = filtersReducerDefaultState, action) => {
    switch (action.type) {

        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text:action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }; 
        
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };    
        
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };    

        default:
            return state;
    }
};

// Get visible expenses

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    
    return expenses( (expense) => {
        
        const startDateMatch =  typeof startDate !== 'number' || expense.createdAt >= startDate;
        // console.log(`startDate ${expense.createdAt} >= ${startDate}` , expense.createdAt >= startDate);

        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        // console.log(`endDate ${expense.createdAt} >= ${endDate}` , expense.createdAt <= endDate);

        const textMatch = expense.description.toLowerCase().includes( text.toLowerCase() );
        return startDateMatch && endDateMatch && textMatch;
    } ).sort((a, b) => {
        
        if( sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if( sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }

    });
};



// Store
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe( () => {
    const state = store.getState();

    // console.log(state);
   const visibleExpenses = getVisibleExpenses(state.expenses, states);
    console.log(visibleExpenses);
} );

const expenseOne =  store.dispatch( addExpense({
    description: 'Renta',
    // note: 'atraso de la renta con intereses',
    amount: 200,
    createdAt: -10
}) );

const expenseTwo = store.dispatch( addExpense({
    description: 'chicles',
    // note: 'compra dulces',
    amount: 100,
    createdAt: -10
}) );

const expenseThree = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -10 }));
const expensefour = store.dispatch(addExpense({ description: 'dulces', amount: 150, createdAt: -10 }));


// store.dispatch( removeExpense({ id: expenseOne.expense.id }) );
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));


// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());



// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));



const demoState = {
    expenses: [{
        id: 'ñjkjbcdsfvbj',
        description: 'July Rent',
        note: 'the payment for this address',
        amount: 600000, //son centavos 
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};


// const user = {
//     name: 'cosa',
//     age:55
// };

// console.log({
//     ...user,
//     age:25
// });


// const addExpense = ( { description = '', 
//                        note = '', 
//                        amount = 0, 
//                        createdAt = 0 } = {} ) => 
//                                 ({  type: 'ADD_EXPENSE',
//                                     expense: {
//                                         id: uuid(),
//                                         description,
//                                         note,
//                                         amount,
//                                         createdAt
//                                     }
//                                 });