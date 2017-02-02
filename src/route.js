import ROUTE_404 from './page-not-found/route'
import ROUTE_EXAMPLE from './example/route'

const ROUTE_TANDC = {
    path: 'terms-and-conditions',
    getComponent(nextState, cb) {
        return require.ensure([], require => {
            cb(null, require('./terms-and-conditions').default)
        })
    }
}

const ROUTE_ROOT = {
    path: '/',
    getComponents(nextState, cb) {
        return require.ensure([], require => {
            cb(null, require('./main-app').default)
        })
    },
    getIndexRoute(partialNextState, cb) {
        return require.ensure([], require => {
            cb(null, {
                component: require('./dashboard').default
            })
        })
    },
    childRoutes: [
        ROUTE_TANDC,
        ROUTE_EXAMPLE,
        ROUTE_404
    ]
}

export default ROUTE_ROOT
