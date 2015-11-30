Note: This is a work in progress

# React/Phoenix Starter Template

My goal with this repo is to provide a starter template for those looking to use React with Phoenix. The React app is separate from the Phoenix app so that you can serve up the static React app from a CDN and then have it talk to the Phoenix API.

## Features

This starter template contains a React frontend app and a Phoenix backend API. It is all setup such that you can begin building your application without worrying about setting up all the boilerplate code. There is basic authentication setup using JWT via the Guardian hex package for Phoenix. If you are unfamiliar with how authenticating an API works you're in luck! I'm about to explain it.

### API Authentication

Authenticating an API is not as complicated as it may seem. The integral part of this is the JWT (JSON Web Token) that we will use to authenticate users on the frontend. Here is an abstract overview of how it works: 

Guardian takes care of generating the JWT for you on the backend when a user logs in with the provided login form. The user will submit their login info via the login form and send the data to the server via HTTP. The Phoenix API will then pass this login info to Guardian which validates the Email/Password and then generates a JWT that it sends back to the React app (If you've never seen a JWT it is just a big random string). The React app takes the new JWT token and stores it in the browsers local storage. Now, every subsequent HTTP request that you're React app makes to the Phoenix API can grab the JWT from local storage and include it as an 'Authorization' header if the resource you're trying to get from the API is private. The Phoenix API checks each incoming request for the 'Authorization' header with a Guardian plug.  You can see this in action in the provided redux actions and the user controller.

## Getting Started

Clone the repo:
```
git clone https://github.com/ryanswapp/react-phoenix-starter-template.git
```

Navigate to the directory and remove the git remote:
```
cd react-phoenix-starter-template

git remote rm origin
```

You will notice that there is a ```frontend``` and ```backend``` folder in the newly cloned app. As you'd expect, the ```frontend``` folder contains the React application and the ```backend``` folder contains the Phoenix API. You will need to open two different terminal windows and in the first navigate to the frontend app and start the server:
```
cd frontend

npm install

npm start
```

This will start your Webpack Dev Server on port 3000. Next, in your other terminal window navigate to the backend app, create the database, and start the server (note, you may need to add a Postgres role [see this post](http://stackoverflow.com/questions/15301826/psql-fatal-role-postgres-does-not-exist) for a fix):
```
cd backend

mix deps.get

mix ecto.create

mix ecto.migrate

mix phoenix.server
```

This will start your Phoenix server on port 4000. You don't need to open this in your browser it will just run in the background. If you navigate to ```http://localhost:3000/``` you will see your new React/Phoenix app.


