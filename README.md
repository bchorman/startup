# WeatherChat

This is an application that allows users to view weather data related to their location and chat with others about it.

## Elevator Pitch

Are you the type of person to watch the weather and track everything that's going on? The WeatherChat application
helps you find a like-minded community of weather enthusiasts. You can view weather for your location or input another
location to view. As the weather data is updated, there is a real-time chat to talk with others viewing the same weather
and discuss the goings-on.

## Design

![Mockup design](mockup.png)

## Key Features

- Secure login over HTTPS
- Ability to use user's location or input location
- Real time weather data
- Up to date chat from other users

## Technologies

I will use the required technologies in the following ways:

- HTML - Use correct HTML structure for pages. Login page and data/chat page.
- CSS - Styling that looks good and stays consistent on different screen sizes,
 unified color scheme, works in light and dark mode
- React - Provides login screen, weather data element, and chat component
- Service - Backend service with endpoints for:
  - login
  - view user profile
  - [AccuWeather API](https://developer.accuweather.com/apis)
    - Location
    - Current Conditions
- DB - Store users and chat logs. Register and log in users with secure credentials
- WebSocket - Chat functionality for all users viewing a specific location in real time.
