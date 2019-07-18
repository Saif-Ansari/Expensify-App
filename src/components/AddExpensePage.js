import React from 'react'
import Expenseform from './ExpenseForm'
import {connect} from 'react-redux'
import {addExpense} from '../actions/expenses'

const AddExpensePage =(props)=> {
    return (
        <div>
            <h1>Add Expense</h1>
            <Expenseform 
             onSubmit = {(expense)=>{
                //  console.log(expense)
                props.dispatch(addExpense(expense));
                props.history.push('/')
             }}
            />
        </div>
    )
}

export default connect()(AddExpensePage)