import {
    counterIncrement,
    counterDecrement
} from '../redux/actions'
import {
    EXAMPLE_COUNTER_DECREMENT,
    EXAMPLE_COUNTER_INCREMENT
} from 'action-types'

describe('counter actions', () => {
    it('create an action to increase counter value', () => {
        const expectedAction = { type: EXAMPLE_COUNTER_INCREMENT }

        expect(
            counterIncrement()
        ).toEqual(expectedAction)
    })

    it('create an action to decrease counter value', () => {
        const expectedAction = { type: EXAMPLE_COUNTER_DECREMENT }

        expect(
            counterDecrement()
        ).toEqual(expectedAction)
    })
})
