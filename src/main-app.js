import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const propTypes = {
    children: PropTypes.any
}

const App = props =>
    <div>
        <header className='header'>
            <div className='row'>
                <div className='col'>
                    <Link className='header_logo_square' to='/' title='Wings'>
                        <img src={require('./assets/images/svg/wings-logo-white.svg')} width='' height='' alt='Wings' className='small' />
                    </Link>
                </div>
            </div>
        </header>

        {props.children}
    </div>

App.propTypes = propTypes

export default App
