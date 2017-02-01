import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import NewTodoInput from './new-todo-input'
import TodoList from './todo-list'
import {
    addNewTodo,
    allTodosSelector,
    toggleTodo,
    unfinishedTodosSelector
} from './redux'

const TodoListWrapper = props => {
    const {
        addNewTodo,
        todos,
        toggleTodo,
        unfinishedTodos
    } = props

    return (
        <div className='main-wrapper'>
            <div className='main-container row'>
                <div className='col'>
                    <NewTodoInput todos={todos} addNewTodo={addNewTodo} />
                    <TodoList todos={unfinishedTodos} toggleTodo={toggleTodo} />
                </div>
            </div>
        </div>
    )
}

TodoListWrapper.propTypes = {
    addNewTodo: PropTypes.func.isRequired,
    todos: PropTypes.any,
    toggleTodo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    todos: allTodosSelector(state),
    unfinishedTodos: unfinishedTodosSelector(state)
})

const mapDispatchToProps = dispatch =>({
    addNewTodo: ({ todos, text }) => dispatch(addNewTodo({ todos, todo: {text, completed: false}})),
    toggleTodo: ({ todos, id }) => dispatch(toggleTodo({ todos, id }))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoListWrapper)
