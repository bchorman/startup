import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { About } from './about/about';
import { Chat } from './chat/chat';
import { Home } from './home/home';
import { Login } from './login/login';
import { Profile } from './profile/profile';
import { Dropdown } from './dropdown/dropdown';

export default function App() {
    const [username, setUsername] = useState(localStorage.getItem("username") || null);

    function logoutUser() {
        localStorage.removeItem("username");
        setUsername(null);
    }

    useEffect(() => {
        if (username) {
            localStorage.setItem("username", username);
        } else {
            localStorage.removeItem("username");
        }
    }
    , [username]);

    return (
            <BrowserRouter>
                <div className="body bg-dark text-light">
                    <header className="container-fluid">
                        <nav className="navbar fixed-top navbar-dark">
                            <div className="navbar-brand">
                                WeatherChat
                            </div>
                            <menu className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    {username && <NavLink className="nav-link" to="chat">
                                        Chat
                                    </NavLink>}
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="about">
                                        About
                                    </NavLink>
                                </li>
                                <li id="login-button" className="nav-item ms-auto me-3">
                                    {username ? (
                                        <Dropdown username={username} onLogout={() => logoutUser()} />
                                    ) : (
                                        <NavLink className="nav-link" to="login">
                                            Login
                                        </NavLink>
                                    )}
                                </li>
                            </menu>
                        </nav>
                    </header>

                    <Routes>
                        <Route path='/' element={<Home setUsername={setUsername}/>} exact />
                        <Route path='/about' element={<About />} />
                        <Route path='/chat' element={<Chat />} />
                        <Route path='/login' element={<Login setUsername={setUsername}/>} />
                        <Route path='/profile' element={<Profile />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>

                    <footer className="bg-dark text-white-50">
                        <div className="container-fluid">
                            <span className="text-reset">Brett Horman</span>
                            <a className="text-reset" href="https://github.com/bchorman/startup">GitHub</a>
                        </div>
                    </footer>
                </div>
            </BrowserRouter>
    );
}

function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
  }