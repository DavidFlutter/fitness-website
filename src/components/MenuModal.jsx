import React from 'react'
import { NavLink } from 'react-router-dom'
import { links } from '../data'

const MenuModal = ({setMenuOpen}) => {
  return (
    <div className='MenuModal'>
        <nav className='menu-nav'>
            {links.map((link, index) => (
                <li key={index} onClick={() => setMenuOpen(false)}><NavLink to={link.path}>{link.name}</NavLink></li>
            ))}
        </nav>
    </div>
  )
}

export default MenuModal