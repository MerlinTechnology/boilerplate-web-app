import React from 'react'

const NewTodoInput = ({ todos, addNewTodo }) => {

    const handleKeyPress = e => {
        const text = e.target.value.trim()
        if (e.which === 13) {
            addNewTodo({ todos, text })
            e.target.value = ''
        }
    }

    return (
        <div>
            <input
                type="text"
                placeholder="What to do?"
                autoFocus="true"
                onKeyPress={handleKeyPress}/>
        </div>
    )
}

export default NewTodoInput
