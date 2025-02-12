import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { About } from './about/about';
import { Chat } from './chat/chat';
import { Home } from './home/home';
import { Login } from './login/login';
import { Profile } from './profile/profile';

export default function App() {
  return <div classNameName="body bg-dark text-light">
            <BrowserRouter>
                <header className="container-fluid">
                    <nav className="navbar fixed-top navbar-dark">
                        <a className="navbar-brand" href="">WeatherChat</a>
                        <menu className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="chat">Chat</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="profile">Profile</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="about">About</NavLink>
                            </li>
                            <li id="login-button" className="btn btn-primary btn-sm ms-auto me-3">
                                <NavLink className="nav-link" to="login">Login</NavLink>
                            </li>
                        </menu>
                    </nav>
                </header>

                <Routes>
                    <Route path='/' element={<Home />} exact />
                    <Route path='/about' element={<About />} />
                    <Route path='/chat' element={<Chat />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>

                <footer className="bg-dark text-white-50">
                    <div className="container-fluid">
                        <span className="text-reset">Brett Horman</span>
                        <a className="text-reset" href="https://github.com/bchorman/startup">GitHub</a>
                    </div>
                </footer>
            </BrowserRouter>
        </div>;
}

function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
  }