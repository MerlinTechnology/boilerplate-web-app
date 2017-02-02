import Immutable from 'immutable'

const updateTodoState = ({ todos, id }) => {
    const immutableTodos = Immutable.fromJS(todos)

    return immutableTodos
        .update(
            immutableTodos.findIndex(todo => todo.get('id') === id),
            todo => todo.set('completed', !todo.get('completed'))
        )
}

const toggleTodoReducer = (state, { todos, id }) =>
    Immutable
        .fromJS(state)
        .set('todos', updateTodoState({ todos, id }))
        .toJSON()

export default toggleTodoReducer
