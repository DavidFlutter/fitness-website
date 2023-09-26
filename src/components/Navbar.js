import React, { useEffect } from 'react'
import {links} from "../data";
import { Link, NavLink } from 'react-router-dom';
import logo from "../images/logo.png";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import MenuModal from './MenuModal';
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 585){
        setMenuOpen(false);
      }
    })
  })
  return (
    <div className='Navbar'>
        <Link to="/fitness-website">
          <img src={logo} alt="logo" />
        </Link>
        <nav>
            <ul>
                {links.map( (link, index) => (
                    <li key={index}>
                      <NavLink to={link.path}>{link.name}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
        <button className="nav-toogle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <AiOutlineClose style={{color:"red"}}></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>}
        </button>
        {menuOpen && <MenuModal setMenuOpen={setMenuOpen}></MenuModal>}
    </div>
  )
}

export default Navbar