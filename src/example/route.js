const ROUTE_EXAMPLE = {
    path: 'example',
    getIndexRoute:
        (partialNextState, cb) =>
            import('./example-list')
                .then(module => cb(null, { component: module.default }))
                .catch(err => console.log(err))
    ,
    childRoutes: [
        {
            path: 'counter',
            getComponents:
                (nextState, cb) =>
                    import('./counter')
                        .then(module => cb(null, module.default))
                        .catch(err => console.log(err))
        },
        {
            path: 'todo-list',
            getComponents:
                (nextState, cb) =>
                    import('./todo-list')
                        .then(module => cb(null, module.default))
                        .catch(err => console.log(err))
        }
    ]
}

export default ROUTE_EXAMPLE
