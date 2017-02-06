# boilerplate-web-app
Boilerplate for starting a new react web app project.
 - [React](https://facebook.github.io/react/)/[Redux](http://redux.js.org/) with [reselect](https://github.com/reactjs/reselect)
 - [webpack](https://webpack.js.org)
 - [CSS modules](https://github.com/css-modules/css-modules)
 - Testing with [Jest](https://facebook.github.io/jest/)

## Setup

### Front-end build
1. Install the latest [Node.js and NPM](https://nodejs.org).
2. (Recommended) Run `npm install -g yarn` to install [yarn](https://yarnpkg.com/) globally and use it instead of npm. All content below assuming the use of `yarn`. `npm` can be used if prefered, just use `npm run` instead of `yarn` in that case.
3. Run `yarn` within the project root directory in Terminal to install dependencies.
4. Run `yarn start`. See ***[Scripts](#scripts)*** below.

### Editor

Ensure your editor supports:
- [EditorConfig](http://editorconfig.org/#download).
- Live linting
  - [ESLint](http://eslint.org/docs/user-guide/integrations#editors) plugin installed and enabled for linting JS - currently using rules from Facebook's [create-react-app](https://github.com/facebookincubator/create-react-app) without `flow-type` plugin.

## Scripts

| Command               | Purpose                                          |
|:----------------------|:-------------------------------------------------|
| `yarn build-dev`      | `webpack` build for development                  |
| `yarn build-prod`     | `webpack` build for production                   |
| `yarn start`          | compile the app then serve content (via [http://localhost:9090](http://localhost:9090) by default) with Hot Module Reload |
| `yarn build:clean`    | delete `build` folder                            |
| `yarn lint:js`        | run eslint through `src` folder, and display errors/warnings to stdout |
| `yarn lint:js:fix`    | run eslint through `src` folder, and fix all auto-fixable problems |
| `yarn test`           | run test |
| `yarn test:watch`     | run test & watch |
