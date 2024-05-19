import React from 'react'
import PageComponent from '../components/PageComponent'

export default function Main() {
    return (
        <PageComponent title="Main">
            <div className='main-login'>
                <div className='login-block'>
                    <div className='login-block-child'>
                        <div className='logo'></div>
                        <input type="text" className='logo-input' placeholder='Name' />
                        <input type="password" className='logo-input' placeholder='Password' />
                        <button type="button" className='logo-input login-btn' >login</button>
                    </div>  
                </div>
            </div>
        </PageComponent>
    )
}