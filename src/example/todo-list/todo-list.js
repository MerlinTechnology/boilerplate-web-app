import React, { PropTypes } from 'react'

import styles from './styles.scss'

const propTypes = {
    todos: PropTypes.array,
    toggleTodo: PropTypes.func
}

const TodoList = ({ todos, toggleTodo }) => {
    const renderTodos = todos =>
        todos.map(({text, id}) => <li key={id} className={styles.todo} onClick={() => toggleTodo({todos, id})}>{text}</li>)

    return (
        <ul className={styles.container}>
            {renderTodos(todos)}
        </ul>
    )
}

TodoList.propTypes = propTypes

export default TodoList
