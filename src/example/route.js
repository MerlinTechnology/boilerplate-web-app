const ROUTE_EXAMPLE = {
    path: 'example',
    getIndexRoute(partialNextState, callback) {
        require.ensure([], require =>
            callback(null, {
                component: require('./example-list').default,
            })
        )
    },
    childRoutes: [
        {
            path: 'counter',
            getComponent(nextState, cb) {
                return require.ensure([], require => {
                    cb(null, require('./counter').default)
                })
            }
        },
        {
            path: 'todo-list',
            getComponent(nextState, cb) {
                return require.ensure([], require => {
                    cb(null, require('./todo-list').default)
                })
            }
        }
    ]
}

export default ROUTE_EXAMPLE
