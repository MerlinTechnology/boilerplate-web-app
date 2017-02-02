import {
    addNewTodo,
    toggleTodo
} from '../redux/actions'
import {
    EXAMPLE_TODOS_ADD_NEW,
    EXAMPLE_TODOS_TOGGLE
} from 'action-types'

describe('todo-list actions', () => {
    it('creates an action to add new todo', () => {
        const todos = []
        const todo = { text: 'new todo' }
        const expectedAction = {
            type: EXAMPLE_TODOS_ADD_NEW,
            todos,
            todo: { text: 'new todo', id: 0, completed: false}
        }

        expect(
            addNewTodo({ todos, todo })
        ).toEqual(expectedAction)
    })

    it('creates an action to toggle a todo state', () => {
        const todos = [{ text: 'todo 1', id: 0, completed: false}]
        const id = 0
        const expectedAction = {
            type: EXAMPLE_TODOS_TOGGLE,
            todos,
            id
        }

        expect(
            toggleTodo({ todos, id })
        ).toEqual(expectedAction)
    })
})
