import React from 'react';
import { NavLink } from 'react-router-dom';

export function Home({ setUsername }) {
    // const [username, setUsernameState] = React.useState(localStorage.getItem("username") || null);
    const [inputText, setInputText] = React.useState("");

        function loginUser() {
            if (inputText.trim()) {
                localStorage.setItem("username", inputText);
                setUsername(inputText);
            }
        }

        function createUser() {
            if (inputText.trim()) {
                localStorage.setItem("username", inputText);
                setUsername(inputText);
            }
        }

        function textChange(event) {
            setInputText(event.target.value);
        }

    return (
        <main className="container-fluid bg-secondary text-center">
                <h1>Welcome to WeatherChat</h1>
                {!localStorage.getItem("username") && (
                    <form method="get" action="chat.html">
                    <div className="input-group mb-3">
                        <span className="input-group-text">Username</span>
                        <input className="form-control" type="text" onChange={textChange} value={inputText}/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Password</span>
                        <input className="form-control" type="password"/>
                    </div>
                    <NavLink type="submit" className="btn btn-primary" to="chat" onClick={loginUser}>
                        Login
                    </NavLink>
                    <NavLink type="submit" className="btn btn-secondary" to="chat" onClick={createUser}>
                        Create
                    </NavLink>
                </form>)}

                {!localStorage.getItem("username") && <hr />}
                <div>
                    <h2>Current Weather</h2>
                    <h4>Provo, UT</h4>
                    <form method="get" action="index.html">
                        <span className="input-group mb-3">Enter location:</span>
                        <input type="text" placeholder="Provo, UT" />
                        <NavLink type="submit" className="btn btn-primary" to="">Search</NavLink>
                        <table>
                            <tbody>
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
                            </tbody>
                        </table>
                    </form>
                </div>
            </main>
    );
}