import React, { useEffect, useState } from 'react';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
    

  return (
    <div className='navbar'>
        <div className='logo'>
            <img src={Logo} />
        </div>
        <div className='hamburger' onClick={toggleMenu}>
        {showMenu ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}

        </div>
        <div className={`navLinks ${showMenu ? 'show' : ''}`}>
            <div className='navLink'><Link to='/'>Home</Link></div>
            <div className='navLink'><Link to='/'>News</Link></div>
            <div className='navLink'><Link to='/'>About</Link></div>
            <div className='navLink'><Link to='/'>Apply</Link></div>
            <div className='btn-group'>
                    <button>Login</button>
                
                    <button>Donate</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar