
const ROUTE_404 = {
    path: '*',
    getComponents:
        (nextState, cb) =>
            import('./page-not-found')
                .then(module => cb(null, module.default))
                .catch(err => console.log(err))
}

export default ROUTE_404
