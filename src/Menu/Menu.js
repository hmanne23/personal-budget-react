import React from 'react';
import {
    Link
} from "react-router-dom";


function Menu() {
  return (
    <header>
        <img src="/bg.png" alt="Background Main Image" aria-hidden="true" />
      <div className="menu">
        <nav
        role="navigation"
        aria-label='Main menu'
        itemScope
        itemType='https://schema.org/SiteNavigationElement'>

          <ul>
            <li id="home"><Link itemProp="url" to="/">Homepage</Link></li>
            <li id="about"><Link itemProp="url" to="/about">About</Link></li>
            <li id="login"><Link itemProp="url" to="/login">Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Menu;
