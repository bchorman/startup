import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return <div className="body bg-dark text-light">
    <header class="container-fluid">
            <nav class="navbar fixed-top navbar-dark">
                <a class="navbar-brand" href="">WeatherChat</a>
                <menu class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="chat.html">Chat</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="profile.html">Profile</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">About</a>
                    </li>
                    <li id="login-button" class="btn btn-primary btn-sm ms-auto me-3">
                        <a class="nav-link" href="login.html">Login</a>
                    </li>
                </menu>
            </nav>
        </header>

        <main>App components go here</main>

        <footer class="bg-dark text-white-50">
            <div class="container-fluid">
                <span class="text-reset">Brett Horman</span>
                <a class="text-reset" href="https://github.com/bchorman/startup">GitHub</a>
            </div>
        </footer>
  </div>;
}