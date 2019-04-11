This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

#### `yarn start`
#### `yarn start-js`
#### `yarn test`
#### `yarn build`
#### `yarn build-js`
#### `yarn pretty`

## More Information

I decided to build this project using React and Redux.

I chose React for the sake of simplicity (developer friendliness, state handling, declarative style) as well as the consideration that the application might grow, at which point the abovementioned points become even more important. I selected Redux for handling the state as is very user friendly (dev tools, time traveling debugging) and can easily be extended (middleware like thunk or sagas, analytics, logger, etc.) or grown should the need arise.

For persisting data I decided to use the localStorage API.

In a second stage I decided to add [Bulma](https://bulma.io/) as a CSS framework to ensure a unified look of the application.

Finally I deployed the [application](https://react-redux-contact-list-gig.herokuapp.com/) to Heroku where it can be admired in all of its glory... ;)  
For this deployment it was necesary to move the react-scripts package from dev dependencies to dependencies as Heroku is not installing dev-dependencies and I wanted to get it deployed the fastest way possible.

