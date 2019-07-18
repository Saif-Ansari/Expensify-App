import React from 'react'
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';
export default function Header() {
    return (
        <div>
        <header>
        <h1>Expensify</h1>
        <NavLink exact={true } to='/' activeClassName="is-active">DashBoard</NavLink>
        <NavLink to='/create' activeClassName="is-active">Create_Expense</NavLink>
        <NavLink to='/help' activeClassName="is-active">Help</NavLink>
        </header>
        </div>
    )
}
