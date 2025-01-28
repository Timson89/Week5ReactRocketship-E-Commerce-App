import React               from 'react';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rating              from '../components/ui/Rating.jsx';
import Price               from '../components/Price.jsx';
import Book                from '../components/ui/Book.jsx';


const BooksInfo = ({ books }) => {

  const { id } = useParams();
  const book = books.find(book => +book.id === +id)
  // console.log(book);

  return (

    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
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
                <img className="book__selected--img" src={ book.url } />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">
            {book.title}
                </h2>
                <Rating rating={ book.rating } />
                <div className="book__selected--price">
                  <Price originalPrice={ book.originalPrice } salePrice={ book.salePrice } />
                </div>
                <div className="book__summary">
                  <div className="book__summary--title">
              Summary
                  </div>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsam accusantium animi dicta temporibus mollitia saepe necessitatibus ab debitis qui?
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsam accusantium animi dicta temporibus mollitia saepe necessitatibus ab debitis qui?
                  </p>
                </div>
                <button className="btn">
            Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="book__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">
          Recommended Books
              </h2>
            </div>
            <div className="books">
              {
                books.filter((book) => book.rating === 5 && +book.id !== +id).slice(0, 4).map(book => <Book book={ book } key={ book.id } /> )
              }
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default BooksInfo;