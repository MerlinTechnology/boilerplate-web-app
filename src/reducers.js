import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { counterReducer } from './example/counter/redux/reducers'
import { todoListReducer } from './example/todo-list/redux/reducers'

const reducers = combineReducers({
    routing: routerReducer,
    counter: counterReducer,
    todoList: todoListReducer
})

export default reducers
