import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, setStartDate, setEndDate, sortByAmount,sortByDate } from './actions/filters';
import  getVisibleExpenses  from './selectors/expenses';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';



const store = configureStore();

const expenseOne =  store.dispatch( addExpense({ description: 'Renta', amount: 400 }) );

const expenseTwo = store.dispatch( addExpense({ description: 'chicles',  createdAt: 1000 }) );


const expenseThree =  store.dispatch( addExpense({ description: 'Recibo agua', amount: 10400 }) );

//store.dispatch(setTextFilter('rent'));



// tambien se puede dentro del subscribe para hacerlo reactivo pero se 
//pone antes de los dispatch(acciones)
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);



const appRoot = document.getElementById('app');
ReactDOM.render(jsx, appRoot);



