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

## HTML Deliverable

For this deliverable, I built out the structure of my website with HTML.

- [x] **HTML pages** - four HTML pages that show the homepage, a chat page, a profile page, and an about page
- [x] **Links** - all pages link to each other and logging in takes the user to the chat page
- [x] **Text** - all the pages include text
- [x] **Images** - I included a blank profile picture on the profile page
- [x] **DB/Login** - there is a form for a user to login or create an account. Each user has a location associated
- [x] **WebSocket** - the realtime chat that allows a user to see others' messages
- [x] **External API** a box on the homepage that includes weather data

## CSS Deliverable

For this deliverable, I properly styled all pages into their final appearance.

- [x] **Header, footer, and main body**
- [x] **Navigation elements** - all elements are styled the same and different from the default HTML
- [x] **Responsive to window resizing** - the website looks good on different window sizes
- [x] **Application elements** - used contrast and spacing for elements
- [x] **Application text content** - consistent fonts
- [x] **Images** - images are included and styled
  - [] **About page image** - this image still needs to have its sizing fixed

## React Deliverable Phase 1

For this deliverable, I used JavaScript and React so that the application works as a single page application.

- [x] **Bundled and transpiled**
- [x] **Components** - all components have a baseline or mock implementation with working navigation buttons
- [x] **Routing** - routing between different components

## React Deliverable Phase 2

For this deliverable, I implemented some basic functionality using JavaScript and React. There are also placeholders for future expansions.

- [x] **Login/Logout** - a user can log in or log out, and the username will be stored or deleted
- [x] **Chat** - a user can send messages in the chat, while random messages appear as a mock of a true chat
- [x] **Location search** - a user can set their location, which in the future will be used for searching the weather at that location

## Service Deliverable

For this deliverable, I implemented backend endpoints for logging in and out, as well as sending messages. There is also a 3rd party API that gets the weather data.

- [x] **Node.js/Express** - implemented
- [x] **Static middleware for frontend** - implemented
- [x] **Calls to third party endpoint** - calls a weather API to get realtime data
- [x] **Login/logout** - a user can create an account, log in, and log out
- [x] **Chat** - a placeholder for a user to post messages, will become a WebSocket

## DB Deliverable

For this deliverable, I created a MongoDB database to store user information and chat messages. The messages will not be stored here long term, but it is a good mock-up for the WebSocket implementation that will exist in the future.

- [x] **MongoDB database** - all data is stored in database
- [x] **Credentials in database** - done
- [x] **Messages in database** - done, will be removed in future

## WebSocket Deliverable

For this deliverable, I used a WebSocket to implement the chat feature of the site.

- [x] **Backend listens for WebSocket connection** - done!
- [x] **Frontend makes WebSocket connection** - done!
- [x] **Data sent over WebSocket connection** - done!
- [x] **Realtime data displayed** - when a user sends a message, all other users can see the message
