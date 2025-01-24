import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LibraryLogo from '../assets/Library.svg'; 


const Nav = () => {

  return (

    <nav>
      <div className="nav__container">
        <a href="/">
          <img className="logo" src={LibraryLogo} alt="" />
        </a>
        <ul className="nav__links">
          <li className="nav__list">
            <a className="nav__link" href="/">
        Home
            </a>
          </li>
          <li className="nav__list">
            <a className="nav__link" href="/book">
        Book
            </a>
          </li>
          <button className="btn__menu">
            <FontAwesomeIcon icon={'bars'} />
          </button>
          <li className="nav__icon">
            <a className="nav__link" href="/cart">
              <FontAwesomeIcon icon={'shopping-cart'} />
            </a>
            <span className="cart__length">2</span>
          </li>
        </ul>
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close">
            <FontAwesomeIcon icon={'times'} />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <a className="menu__link" href="/">
          Home
              </a>
            </li>
            <li className="menu__list">
              <a className="menu__link" href="/book">
          Book
              </a>
            </li>
            <li className="menu__list">
              <a className="menu__link" href="/cart">
          Cart
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav