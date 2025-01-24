import React from 'react';
import Logo from '../assets/Library.svg';

const Footer = () => {

  return (

    <footer>
      <div className="container">
        <div className="row row__column">
          <a href="/">
            <figure className="footer__logo">
              <img className="footer__logo--img" src={ Logo } alt="Logo"  />
            </figure>
          </a>
          <div className="footer__list">
            <a className="footer__link" href="/">Home</a>
            <span className="footer__link no-cursor">About</span>
            <a className="footer__link" href="/books" ></a>
            <a className="footer__link" href="/cart" >Cart</a>
          </div>
          <div className="footer__copyright">
            Copyright &copy; 2021 Library
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;