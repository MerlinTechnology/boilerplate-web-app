import ROUTE_404 from './page-not-found/route'
import ROUTE_EXAMPLE from './example/route'

const ROUTE_TANDC = {
    path: 'terms-and-conditions',
    getComponents:
        (nextState, cb) =>
            import('./terms-and-conditions')
                .then(module => cb(null, module.default))
                .catch(err => console.log(err))
}

const ROUTE_ROOT = {
    path: '/',
    getComponents:
        (nextState, cb) =>
            import('./main-app')
                .then(module => cb(null, module.default))
                .catch(err => console.log(err)),
    getIndexRoute:
        (partialNextState, cb) =>
            import('./dashboard')
                .then(module => cb(null, { component: module.default }))
                .catch(err => console.log(err)),
    childRoutes: [
        ROUTE_TANDC,
        ROUTE_EXAMPLE,
        ROUTE_404
    ]
}

export default ROUTE_ROOT
