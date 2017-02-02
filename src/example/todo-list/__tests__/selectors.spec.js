import {
    allTodosSelector,
    unfinishedTodosSelector
 } from '../redux/selectors'

describe ('allTodosSelector', () => {
    it('returns all todos', () => {
        const todos = [ { text: 'todo1', id: 0, completed: false }, { text: 'todo2', id: 1, completed: true }]
        const state = { todoList: { todos }}

        expect(
            allTodosSelector(state)
        ).toEqual(todos)
    })
})

describe ('unfinishedTodosSelector', () => {
    it('returns unfinished todos', () => {
        const todos = [ { text: 'todo1', id: 0, completed: false }, { text: 'todo2', id: 1, completed: true }]
        const state = { todoList: { todos }}
        const expectedResult = [{ text: 'todo1', id: 0, completed: false }]

        expect(
            unfinishedTodosSelector(state)
        ).toEqual(expectedResult)
    })
})
