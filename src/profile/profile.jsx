import React from 'react';
import './profile.css';

export function Profile() {
  return (
    <main className="container-fluid bg-secondary text-center">
            <img id="profile" className="picture-box" src="/profile.png" alt="Profile Picture"/>
            <h2>Mystery user</h2>
            <p>Location: Provo, UT</p>
            <p>Friends: 123</p>
            <p>Interests: Weather, Chatting</p>
            <form>
                <button className="btn btn-primary" type="submit">Edit</button>
            </form>
        </main>
  );
}