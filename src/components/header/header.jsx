import React, { useState } from 'react';
import './header.css';

import logo from '../../assets/logo1-removebg-preview.png';
import bar from '../../assets/bars.png';
import { Link } from "react-scroll"

function Header() {
  const mobile = window.innerWidth <= 768; // Simplified boolean assignment
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      {/* Logo */}
      <img src={logo} alt="Logo" className="logo" />

      {/* Mobile Menu */}
      {menuOpened === false && mobile ? (
        <div onClick={() => setMenuOpened(true)} style={{
          backgroundColor: 'var(--appColor)', padding: "0.5rem",
          borderRadius: "5px"
        }}>
          <img src={bar} alt="Menu bar" className="menu-icon" style={{ width: '1.5rem', height: '1.5rem' }} />
        </div>
      ) : (
        <ul className="header-Menue">
          <li >

            <Link
              onClick={() => setMenuOpened(false)}

              to='hero'
              span={true}
              smooth={true}
            >Home</Link>
          </li>
          <li >
            <Link
              onClick={() => setMenuOpened(false)}
              to='About-Us'
              span={true}
              smooth={true}>
              About Us
            </Link>
          </li>
          <li >
            <Link
              onClick={() => setMenuOpened(false)}
              to='Programs'
              span={true}
              smooth={true}>
              Program
            </Link>
          </li>
          <li >
            <Link
              onClick={() => setMenuOpened(false)}
              to='plans'
              span={true}
              smooth={true}>
              Plan
            </Link>
          </li>
          <li >
            <Link
              onClick={() => setMenuOpened(false)}
              to='Testimonials'
              span={true}
              smooth={true}>Testimonials</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
