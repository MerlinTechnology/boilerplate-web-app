import React from 'react'
import renderer from 'react-test-renderer'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import configureMockStore from 'redux-mock-store'

import TodoListWrapper from '../'
import { initialState } from '../redux'

const middleware = [thunk, routerMiddleware(browserHistory)]
const mockStore = configureMockStore(middleware)

it('renders correctly', () => {
    const store = mockStore({ todoList: initialState })
    const component = renderer.create(
        <TodoListWrapper store={store}/>
    )

    expect(component).toMatchSnapshot()
})
