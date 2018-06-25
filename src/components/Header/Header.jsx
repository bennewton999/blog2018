import React, { Component } from 'react';
import Link from 'gatsby-link';
import Overdrive from 'react-overdrive';
import { TweenMax } from 'gsap';
import config from '../../../data/SiteConfig';
import './Header.scss';

class Header extends Component {

  componentDidMount() {
    const el = this._inputRef;
    TweenMax.set( el, { css: { scale: 0, opacity: 0 } });
    TweenMax.to( el, 0.25, { css: { scale: 1, opacity: 1 } });
  }


  render() {
    return (
      <header>
        <Link to="/">
          <Overdrive id="me">
            <img
              src={config.userAvatar}
              className="header-img"
              alt={config.userName}
            />
          </Overdrive>
          <h1 ref={r => (this._inputRef = r)} className="my-name">Ben Newton</h1>
        </Link>
      </header>
    );
  }
}

export default Header;
