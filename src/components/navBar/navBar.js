import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';

const NavBar = () => {
  const [navmenu, setNavmenu] = useState(false)

  const showNavmenu = () => {
    setNavmenu(!navmenu)
  }

  const navmenuData = [
    {
      title: 'Home',
      path: '/',
      icon: <FaIcons.FaHome/>,
      cName: 'nav-text'
    },
    {
      title: 'Your Tools',
      path: '/tools',
      icon: <FaIcons.FaPlug/>,
      cName: 'nav-text'
    },
    {
      title: 'Search',
      path: '/search',
      icon: <FaIcons.FaSearch/>,
      cName: 'nav-text'
    },
    {
      title: 'Options',
      path: '/options',
      icon: <FaIcons.FaUserCog/>,
      cName: 'nav-text'
    }
  ]

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <Link to='#' className='menu'>
            <FaIcons.FaBars onClick={showNavmenu}/>
          </Link>
        </div>
        <nav className={navmenu ? 'navmenu open' : 'navmenu'}>
          <ul className='navmenu-items' onClick={showNavmenu}>
            <li className='navmenu-toggle'>
              <Link to='#' className='menu-bars'>
                <FaIcons.FaWindowClose />
              </Link>
            </li>
            {navmenuData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default NavBar;