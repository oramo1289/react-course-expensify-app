import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from './../selectors/expenses';


// const selectExpenses = getVisibleExpenses();

const ExpenseList = (props) => (
    <div>
        <h1>
            Expense List 
        </h1>
            {
            props.expenses.map((expense, index) => (
                // <ExpenseListItem 
                //     key={expense.id}
                //     description={expense.description}
                //     amount={expense.amount}
                //     createdAt={expense.createdAt}
                // />
                <ExpenseListItem 
                    key={expense.id}
                    {...expense}
                />    
            ))
            }
            
            
    </div>
);


const mapStateToProps = (state) => {
    console.log(state);
  return {
    // expenses: selectExpenses(state.expenses, state
    expenses: state.expenses
  };
};
export default connect(mapStateToProps)(ExpenseList);


