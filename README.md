# DevConnect-UI

## Part-1

- Craete Vite + React application
- Remove unnessary code and create Hello world
- Install tailwindcss
- Install daisy UI
- Add Navbar in app.jsx
- Create a NavBar.jsx separate Component file
- Install react-router dom
- Create BrowserRouter > Routes > Route=/ Body > RouteChildren
- Create an Outlet in your Body Component
- Create a Footer

## Part-2 

- Create Login Page
- Install axios
- CORS - install cors in backend => add middelware with configrations: origin, credentials: true
- Whenever you are making API call so pass axios => {withCredentials: true}
- npm install @reduxjs/toolkit react-redux 
- configureStore => Provider => createSlice => add reducer to store
- Add redux devTools in chrome
- Login and see if your data is coming properly in the store
- NavBar should update as soon as user logs in
- Refactor our code to add constants file + create a components for all

## Part-3

- You should not be access other routes without login
- If token is not present, redirect user to login page




# Deploymet Session - 3 

## EP-01

- Signup on AWS
- Launch instance
- ssh -i "sam.pem" ubuntu@ec2-13-235-82-40.ap-south-1.compute.amazonaws.com
- Install Node version 20.11.1
- Git clone