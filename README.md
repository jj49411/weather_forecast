# Weather Forecast

## Getting Started

- Clone the repo
- Run `$ npm install`
- Run `$ npm start` to open the app on the browser


## Running Tests

- Run `$ npm test` 

## Technologies Used

- JavaScript
- React
- Jest
- Enzyme

### Tools

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

### Progress Report

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
