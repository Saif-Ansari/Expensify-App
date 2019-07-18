// Higher Order Component (HOC) - A Component that renders and returns another component
// Reuse code
// Render Hijacking
// props manipulation
// Abstract state 
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props)=>(
    <div>
          <h1>Info</h1> 
          <p>The Info is: {props.info}</p>  
    </div>
)

//hoc
const withAdminWarning = (WrappedComponent)=> {
    return (props)=>(
        <div>
        {props.isAdmin && <p>This is private info. Please Don't share</p>}
         <WrappedComponent {...props}/>
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AdminInfo isAdmin={true} info="information"/>,document.getElementById('app'));