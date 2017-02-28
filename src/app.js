import React from 'react'
import ReactDom from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import AWS from 'aws-sdk/global'
import { syncHistoryWithStore } from 'react-router-redux'

import 'assets/sass/main.global.scss'

import ROUTE_ROOT from './route'
import storeConfig from './store'
import ENV_VARS from './uilib/env-vars'

// default AWS setup
AWS.config.update({
    region: ENV_VARS.DEFAULT_AWS_CONFIG.region,
    apiVersions: ENV_VARS.DEFAULT_AWS_CONFIG.apiVersions
})

const store = storeConfig()
const history = syncHistoryWithStore(browserHistory, store)

ReactDom.render(
    <Provider store={store}>
        <Router history={history} routes={ROUTE_ROOT} />
    </Provider>,
    document.getElementById('content')
)
