import { createSelector } from 'reselect'

export const allTodosSelector = state => state.todoList.todos

export const unfinishedTodosSelector = createSelector(
    allTodosSelector,
    todos => todos.filter(todo => !todo.completed)
)
