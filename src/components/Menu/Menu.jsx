import React from 'react';
import Link from 'gatsby-link';
import './Menu.scss';

const Menu = () => (
  <div className="menu">
    <Link to="/about">About Me</Link>
    <Link to="/uses">{'My Set Up'}</Link>
  </div>
);

export default Menu;
