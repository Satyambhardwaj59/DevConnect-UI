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

- Frontend
    - npm install -> dependencies install
    - npm run build
    - sudo apt update
    - sudo apt install nginx
    - sudo systemctl start nginx
    - sudo systemctl enable nginx
    - Copy code from dist(build files) to /var/www/html/
    -  sudo scp -r dist/* /var/www/html/
    - Enable port :80 of your instance

- Backend 
    - npm install
    - allowed ec2 instance Public IP on mongoDb server
    - npm run start
    - allow ip at EC2 instance
    - install npm install pm2 -g
    - pm2 start npm -- start 
    - rename the process pm2 start npm -- name "DevConnect" -- start 
    - pm2 logs
    - pm2 list, pm2 flush <name> , pm2 stop <name>, pm2 delete <name>
    - config nginx - sudo nano /etc/nginx/sites-available/default
    - sudo systemctl restart nginx 
    - Modify the BASE_URL in frontend project to '/api'


# Nginx config

    - Frontend = http://13.235.82.40/
    - Backend = http://13.235.82.40: 7777/

- server_name 13.235.82.40;

location /api/ {
    proxy_pass http://localhost:7777/;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}
