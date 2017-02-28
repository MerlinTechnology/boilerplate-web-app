import { makeActionCreator } from 'uilib/redux/creators'

import {
    EXAMPLE_COUNTER_DECREMENT,
    EXAMPLE_COUNTER_INCREMENT
} from 'action-types'

export const counterIncrement = makeActionCreator(EXAMPLE_COUNTER_INCREMENT)
export const counterDecrement = makeActionCreator(EXAMPLE_COUNTER_DECREMENT)
