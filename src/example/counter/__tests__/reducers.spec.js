import reducer, { initialState } from '../redux/reducers'
import {
    EXAMPLE_COUNTER_DECREMENT,
    EXAMPLE_COUNTER_INCREMENT
} from 'action-types'

describe ('counter reducer', () => {
    it('returns the initial state', () => {
        expect(
            reducer(initialState, {})
        ).toEqual(initialState)
    })

    it('increase the counter value', () => {
        expect(
            reducer(initialState, {
                type: EXAMPLE_COUNTER_INCREMENT
            })
        ).toEqual({value: 1})
    })

    it('decrease the counter value', () => {
        expect(
            reducer(initialState, {
                type: EXAMPLE_COUNTER_DECREMENT
            })
        ).toEqual({value: -1})
    })
})
