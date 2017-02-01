import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import reducers from './reducers'
import appHelper from './uilib/utils/app-helper'


//production middleware,
//put them here
let middleware = [thunk, routerMiddleware(browserHistory)]

//developement environment middleware
if (appHelper.ifDebug()) {
    let config = require('./uilib/env-vars')
    let createLogger = require('redux-logger')
    let logger = createLogger(config.REDUX_LOGGER_CONFIG)
    middleware = [...middleware, logger]
}

const composeEnhancers = appHelper.ifDebug() ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

const storeConfig = preloadedState => createStore(
    reducers,
    preloadedState,
    composeEnhancers(
        applyMiddleware(...middleware)
    )
)

export default storeConfig
