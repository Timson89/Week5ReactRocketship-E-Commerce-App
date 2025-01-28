import React               from 'react';
import { Link }            from 'react-router-dom/cjs/react-router-dom.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rating              from '../components/ui/Rating.jsx';
import Price               from '../components/Price.jsx';


const BooksInfo = ({ books }) => {

  return (

    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="books__selected--top">
              <Link className="book__link" to="/books" >
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link className="book__link" to="/books">
                <h2 className="book__selected--title--top">
            Books
                </h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img className="book__selected--img" src="https://m.media-amazon.com/images/I/61mIq2iJUXL._AC_UF1000,1000_QL80_.jpg" alt="A Book Cover [:)]" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">
            Crack The Coding interview
                </h2>
                <Rating rating='4.5' />
                <div className="book__selected--price">
                  <Price originalPrice={35} salePrice={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default BooksInfo;