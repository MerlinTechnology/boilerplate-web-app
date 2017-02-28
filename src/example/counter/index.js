import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import {
    counterDecrement,
    counterIncrement,
    counterValueSelector
} from './redux'

import styles from './styles.scss'

const Counter = props => {
    const {
        counter,
        counterDecrement,
        counterIncrement
    } = props

    return (
        <div className='main-wrapper'>
            <div className='main-container row'>
                <div className='col'>
                    <h1 className={styles.h1}>{'Counter'}</h1>
                    <span className={styles.span}>{counter}</span>
                    <button onClick={counterDecrement}>{'-'}</button>
                    <button onClick={counterIncrement}>{'+'}</button>
                </div>
            </div>
        </div>
    )
}

Counter.propTypes = {
    counter: PropTypes.any,
    counterDecrement: PropTypes.func.isRequired,
    counterIncrement: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    counter: counterValueSelector(state)
})

const mapDispatchToProps = dispatch => ({
    counterDecrement: () => dispatch(counterDecrement()),
    counterIncrement: () => dispatch(counterIncrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
