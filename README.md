# Weather Forecast
A web application that allows users to type in a city and see the weather forecast, including temperature, summary, precipitation and weekly forecast. Two external APIs are used: Geocoding API [Mapbox](https://www.mapbox.com/) and Weather API [DarkSky](http://darksky.net/dev).

## Demo
![demo](https://media.giphy.com/media/SqlC3MCo3K879lDewU/giphy.gif)

## Getting Started

- Clone the repo
- Run `$ npm install`
- Run `$ npm start`
- Visit `http://localhost:8000 `


## Running Tests

- Run `$ npm test` 

## Technologies Used

- JavaScript
- React
- Jest
- Enzyme


## User Stories

```
As a user
So I can search for weather forecasts
I would like to type in a city 

As a user
So I can know the current weather
I would like to see weather display

As a user
So I can know the weather for the week
I would like to see weekly forecast
```

## Progress Report

To solve H10 error when deploy to heroku

- Run `$ npm add serve --save`
- Add scripts in package.json
```
"scripts": {
    "dev": "react-scripts start",
    "heroku-postbuild": "npm run build",
    "start": "serve -s build",
  }
```
