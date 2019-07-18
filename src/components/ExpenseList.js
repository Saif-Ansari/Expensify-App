import React from 'react'
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'

const ExpenseList = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Expense List</h1>
            {props.expenses.map((expense)=>{
                return <ExpenseListItem key={expense.id} {...expense}/>
            })}
        </div>
    )
}

// const ConnectedExpenseList = connect((state)=>{
    //   return {
        //       expenses: state.expenses
        //   }
        // })(ExpenseList);
        
        // export default ConnectedExpenseList
        
 const mapStateToProps = (state)=>{
    return {
            //  expenses: state.expenses,
            //  filters: state.filters
            expenses: selectExpenses(state.expenses,state.filters)
           }
        }

  export default connect(mapStateToProps)(ExpenseList);      