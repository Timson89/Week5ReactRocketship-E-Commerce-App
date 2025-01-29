import React       from "react";
import UndrawBooks from '../assets/Undraw_Books.svg';
import { Link }    from "react-router-dom";


const Landing = () => {

  return (

    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>
          America's Most Trusted Library Platform.
            </h1>
            <h2>
          Find your dream book with <span className="purple">Library</span>
            </h2>
            <Link to="#features" target='true'>
              <button className="btn">
          Browse Books
              </button>
            </Link>
          </div>
          <figure className="header__img--wrapper">
            <img className="" src={ UndrawBooks } alt="Girl sitting while reading A book" />
          </figure>
        </div>
      </header>
    </section>
  )
}

export default Landing;