import React, { PropTypes } from 'react'

const propTypes = {
    todos: PropTypes.array,
    addNewTodo: PropTypes.func
}

const NewTodoInput = ({ todos, addNewTodo }) => {
    const handleKeyPress = e => {
        const text = e.target.value.trim()
        if (e.which === 13 && text !== '') {
            addNewTodo({ todos, text })
            e.target.value = ''
        }
    }

    return (
        <div>
            <input
                type='text'
                placeholder='What to do?'
                autoFocus='true'
                onKeyPress={handleKeyPress} />
        </div>
    )
}

NewTodoInput.propTypes = propTypes

export default NewTodoInput
