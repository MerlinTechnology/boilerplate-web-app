import {
    EXAMPLE_TODOS_ADD_NEW,
    EXAMPLE_TODOS_TOGGLE
} from 'action-types'

export const addNewTodo = ({ todos, todo }) => ({
    type: EXAMPLE_TODOS_ADD_NEW,
    todos,
    todo: {...todo, id: todos.length, completed: todo.completed || false}
})

export const toggleTodo = ({ todos, id }) => ({
    type: EXAMPLE_TODOS_TOGGLE,
    todos,
    id
})
