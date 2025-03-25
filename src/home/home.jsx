import React from 'react';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { AuthState } from '../login/authState';
import './home.css';

export function Home({ authState }) {
    const [location, setLocation] = React.useState(localStorage.getItem("location") || "Provo, UT");
    const [locationInput, setLocationInput] = React.useState("");
    const [weather, setWeather] = React.useState(localStorage.getItem("weather") || null);
    const weatherKey = "865521f19b454881ad1183727251503";

    function updateLocation(event) {
        setLocationInput(event.target.value);
    }

    function setNewLocation(event) {
        event.preventDefault();
        if (locationInput.trim()) {
            setLocation(locationInput);
            localStorage.setItem("location", locationInput);
            setLocationInput("");
        }
    }

    async function getWeather() {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=${location}`, {
            method: "get"
        });
        if (response?.status === 200) {
            const body = await response.json();
            setWeather(body);
            localStorage.setItem("weather", JSON.stringify(body));
        }
    }

    return (
        <main className="container-fluid bg-secondary text-center">
                <h1>Welcome to WeatherChat</h1>
                <img id="clouds" className="picture" src="/clouds-header.webp" alt="clouds-header" />
                <div>
                    {authState === AuthState.Authenticated && (
                        <div>
                            <h2>Welcome, {localStorage.getItem('userName')}</h2>
                            <NavLink className="btn btn-primary" to="chat">Chat</NavLink>
                        </div>
                    )}
                    {authState === AuthState.Unauthenticated && (
                        <div>
                            <NavLink className="btn btn-primary" to="login">Login</NavLink>
                        </div>
                    )}
                </div>

                <hr />
                <div>
                    <h2>Current Weather</h2>
                    {weather && (<h4>{weather.location.name}, {weather.location.region}</h4>)}
                    <hr></hr>
                    <form onSubmit={setNewLocation}>
                        <input type="text" placeholder="Provo, UT" value={locationInput} onChange={updateLocation}/>
                        <Button variant='primary' onClick={() => getWeather()} disabled={!locationInput}>
                            Submit
                        </Button>
                        {weather && (
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Temperature</td>
                                        <td>{weather.current.temp_f}&deg;F ({weather.current.temp_c}&deg;C)</td>
                                    </tr>
                                    <tr>
                                        <td>Humidity</td>
                                        <td>{weather.current.humidity}%</td>
                                    </tr>
                                    <tr>
                                        <td>Wind</td>
                                        <td>{weather.current.wind_mph} mph ({weather.current.wind_kph} kph) {weather.current.wind_dir}</td>
                                    </tr>
                                    <tr>
                                        <td>Condition</td>
                                        <td>
                                            <img src={weather.current.condition.icon} alt={weather.current.condition.text} />
                                            {weather.current.condition.text}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Feels Like</td>
                                        <td>{weather.current.feelslike_f}&deg;F ({weather.current.feelslike_c}&deg;C)</td>
                                    </tr>
                                </tbody>
                            </table>
                        )}
                    </form>
                </div>
            </main>
    );
}