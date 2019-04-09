This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`
### `yarn test`
### `yarn build`
### `yarn pretty`

## More Information

I decided to build this project using React and Redux.

I chose React for the sake of simplicity (developer friendliness, state handling, declarative style) as well as the consideration that the application might grow, at which point the abovementioned points become even more important. I selected Redux for handling the state as is very user friendly (dev tools, time traveling debugging) and can easily be extended should the need arise (middleware like thunk or sagas, analytics, logger, etc.) or grown.

For persisting data I decided to use the localStorage API.

