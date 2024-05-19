import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const navigation = [
    { name: 'Rooms', to: '/rooms'},
    { name: 'Admin', to: '/admin'},
]

const images =  {
    logo:'https://seeklogo.com/images/C/cinema-logo-1816B261B0-seeklogo.com.png',
    width:'80px',
    height:'50px'
}



function classNames(...classes){
    return classes.filter(Boolean).join(' ')
}

export default function DefaultLayout() {
    return(
        <>
        <div className='header-top'>
            <div className='logo'>
                <img src={images.logo} width={images.width} height={images.height} />
            </div>
            <div className='navbar'>
                <ul>
                    {navigation.map((item)=>(
                        <li key={item.name}>
                            <NavLink
                                key={item.name}
                                to={item.to}
                                className={({ isActive }) => classNames(
                                    isActive
                                    ? 'this-page'
                                    :'another-page',
                                    'test'
                                )}
                                >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
        <Outlet />
        </>
    )
}