import React from 'react'
import { Link } from 'react-router'

const ExampleList = () =>
    <div className="main-wrapper">
        <div className="main-container row">
            <ul>
                <li><Link to='/example/counter'>Counter</Link></li>
                <li><Link to='/example/todo-list'>Todo List</Link></li>
            </ul>
        </div>
    </div>

export default ExampleList
