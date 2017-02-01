import React from 'react'
import { Link } from 'react-router'

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

export default App
