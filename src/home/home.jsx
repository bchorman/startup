import React from 'react';

export function Home() {
  return (
    <main className="container-fluid bg-secondary text-center">
            <h1>Welcome to WeatherChat</h1>
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
            <div>
                <h2>Current Weather</h2>
                <h4>Provo, UT</h4>
                <form method="get" action="index.html">
                    <span className="input-group mb-3">Enter location:</span>
                    <input type="text" placeholder="Provo, UT" />
                    <button type="submit" className="btn btn-primary">Search</button>
                    <table>
                        <tr>
                            <td>Temperature</td>
                            <td>70&deg;F</td>
                        </tr>
                        <tr>
                            <td>Humidity</td>
                            <td>30%</td>
                        </tr>
                        <tr>
                            <td>Wind</td>
                            <td>5 mph</td>
                        </tr>
                    </table>
                </form>
            </div>
        </main>
  );
}