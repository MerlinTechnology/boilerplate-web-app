import reducer, { initialState } from '../redux/reducers'
import {
    EXAMPLE_TODOS_ADD_NEW,
    EXAMPLE_TODOS_TOGGLE
} from 'action-types'

describe('todo-list reducer', () => {
    it('returns the initial state', () => {

        expect(
            reducer(initialState, {})
        ).toEqual(initialState)
    })


    it('adds new todo', () => {
        const todo = { text: 'new todo', id: 0, completed: false }
        const expectedState = {todos: [{ text: 'new todo', id: 0, completed: false }]}

        expect(
            reducer(initialState, {
                type: EXAMPLE_TODOS_ADD_NEW,
                todos: initialState.todos,
                todo
            })
        ).toEqual(expectedState)
    })

    it('toggles todo', () => {
        const id = 0
        const todos = [{ text: 'todo1', id: 0, completed: false }]
        const expectedState = {todos: [{ text: 'todo1', id: 0, completed: true }]}

        expect(
            reducer(initialState, {
                type: EXAMPLE_TODOS_TOGGLE,
                todos,
                id
            })
        ).toEqual(expectedState)
    })
})
