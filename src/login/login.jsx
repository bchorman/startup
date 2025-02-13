import React from 'react';

export function Login() {
  return (
    <main className="container-fluid bg-secondary text-center">
            <h1>Login</h1>
            <form method="get" action="chat.html">
                <div className="input-group mb-3">
                    <span className="input-group-text">Username</span>
                    <input className="form-control" type="text"/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Password</span>
                    <input className="form-control" type="password"/>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <button type="submit" className="btn btn-secondary">Create</button>
            </form>

            <hr />
        </main>
  );
}