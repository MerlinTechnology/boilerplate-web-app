import { createReducer } from 'uilib/redux/creators'

import {
    EXAMPLE_COUNTER_DECREMENT,
    EXAMPLE_COUNTER_INCREMENT
} from 'action-types'

const initialState = {
    value: 0
}

export const counterReducer = createReducer(initialState, {
    [EXAMPLE_COUNTER_DECREMENT]: require('./counter-decrement').default,
    [EXAMPLE_COUNTER_INCREMENT]: require('./counter-increment').default
})

export default counterReducer
