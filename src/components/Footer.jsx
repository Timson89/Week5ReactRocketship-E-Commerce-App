import React    from 'react';
import Logo     from '../assets/Library.svg';
import { Link } from "react-router-dom";


const Footer = () => {

  return (

    <footer>
      <div className="container">
        <div className="row row__column">
          <Link to="/">
            <figure className="footer__logo">
              <img className="footer__logo--img" src={ Logo } alt="Logo"  />
            </figure>
          </Link>
          <div className="footer__list">
            <Link className="footer__link" to="/">Home</Link>
            <span className="footer__link no-cursor">About</span>
            <Link className="footer__link" to="/books" ></Link>
            <Link className="footer__link" to="/cart" >Cart</Link>
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