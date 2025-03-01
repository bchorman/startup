import React from 'react';
import { NavLink } from 'react-router-dom';

export function Login({ setUsername }) {
    const [username, setText] = React.useState(localStorage.getItem("username") || null);
    function loginUser() {
        localStorage.setItem("username", username);
        setUsername(username);
    }
    function createUser() {
        localStorage.setItem("username", username);
        setUsername(username);
    }
    function textChange(event) {
        setText(event.target.value);
    }
  return (
    <main className="container-fluid bg-secondary text-center">
            <h1>Login</h1>
            <form method="get" action="chat.html">
                <div className="input-group mb-3">
                    <span className="input-group-text">Username</span>
                    <input className="form-control" type="text" onChange={textChange}/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Password</span>
                    <input className="form-control" type="password"/>
                </div>
                <NavLink type="submit" className="btn btn-primary" to="/chat" onClick={loginUser}>Login</NavLink>
                <NavLink type="submit" className="btn btn-secondary" to="/chat" onClick={createUser}>Create</NavLink>
            </form>

            <hr />
        </main>
  );
}