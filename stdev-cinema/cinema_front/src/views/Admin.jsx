import React from 'react'
import PageComponent from '../components/PageComponent'
import { NavLink, Outlet } from 'react-router-dom'

export default function Admin() {

    const navigation = [
        { name: 'Rooms', to: '/admin/room'},
        { name: 'Movies', to: '/admin/movie'},
        { name: 'Seans', to: '/admin/seans'},
    ]
    function classNames(...classes){
        return classes.filter(Boolean).join(' ')
    }

    return (
        <PageComponent title="Admin">
                    <ul className='admin_menus'>
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
        </PageComponent>
    )
}