import Immutable from 'immutable'

const addTodo = ({ todos, newTodo }) =>
    Immutable
        .fromJS(todos)
        .push(newTodo)

const addTodoReducer = (state, { todos, todo }) => {
    return Immutable
        .fromJS(state)
        .set('todos', addTodo({ todos, newTodo: todo }))
        .toJSON()
}

export default addTodoReducer
