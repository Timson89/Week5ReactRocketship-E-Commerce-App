import React               from "react";
import { Link }            from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LibraryLogo         from '../assets/Library.svg';


const Nav = () => {

  function openMenu(){

    document.body.classList += (" menu--open");
  }

  function closeOpen(){
    
    document.body.classList.remove("menu--open");
  }

  return (

    <nav>
      <div className="nav__container">
        <Link to="/">
          <img className="logo" src={LibraryLogo} alt="" />
        </Link>
        <ul className="nav__links">
          <li className="nav__list">
            <Link className="nav__link" to="/">
        Home
            </Link>
          </li>
          <li className="nav__list">
            <Link className="nav__link" to="/books">
        Books
            </Link>
          </li>
          <button className="btn__menu" onClick={openMenu}>
            <FontAwesomeIcon icon={'bars'} />
          </button>
          <li className="nav__icon">
            <Link className="nav__link" to="/cart">
              <FontAwesomeIcon icon={'shopping-cart'} />
            </Link>
            <span className="cart__length">2</span>
          </li>
        </ul>
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeOpen}>
            <FontAwesomeIcon icon={'times'} />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <Link className="menu__link" to="/">
          Home
              </Link>
            </li>
            <li className="menu__list">
              <Link className="menu__link" to="/books">
          Books
              </Link>
            </li>
            <li className="menu__list">
              <Link className="menu__link" to="/cart">
          Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav