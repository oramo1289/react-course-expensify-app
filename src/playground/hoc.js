// higher order component (HOC) - component (HOC) that renders another component
//Reuse code
//render hijacking
//prop manipulation
//abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>Some info abut this is top secret</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuth = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? <WrappedComponent {...props}/> : 'you need to be auth'}
            {/* {props.isAuth && <WrappedComponent {...props}/>} */}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuth(Info);



const appRoot = document.getElementById('app');
//ReactDOM.render(<AdminInfo isAdmin={false} info={'this are the details'}/>, appRoot);
ReactDOM.render(<AuthInfo isAuth={true} info={'this are the details'}/>, appRoot);