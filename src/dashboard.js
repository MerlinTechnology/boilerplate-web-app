import React from 'react'
import { Link } from 'react-router'

const Dashboard = props =>
    <div className='main-wrapper'>
        <div className='main-container row'>
            <div>
                <Link to='/example'>Examples</Link>
            </div>
        </div>
    </div>

export default Dashboard
