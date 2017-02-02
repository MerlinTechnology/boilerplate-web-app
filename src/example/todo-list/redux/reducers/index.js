import { createReducer } from 'uilib/redux/creators'

import {
    EXAMPLE_TODOS_ADD_NEW,
    EXAMPLE_TODOS_TOGGLE
} from 'action-types'

export const initialState = {
    todos: []
}

export const todoListReducer = createReducer(initialState, {
    [EXAMPLE_TODOS_ADD_NEW]: require('./add-todo').default,
    [EXAMPLE_TODOS_TOGGLE]: require('./toggle-todo').default
})

export default todoListReducer
