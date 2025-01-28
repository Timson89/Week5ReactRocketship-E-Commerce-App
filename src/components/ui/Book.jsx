import React    from 'react';
import { Link } from 'react-router-dom';
import Rating   from '../ui/Rating';
import Price    from '../Price.jsx';   


const Book = ({ book }) => {

  return (

    <div className="book">
      <Link to="/books/1">
        <figure className="book__img--wrapper">
          <img className="book__img" src={ book.url } alt="A Book Cover" />
        </figure>
      </Link>
      <div className="book__title">
        <Link className='book__title--link' to="/books/1">
          { book.title }
        </Link>
      </div>
      <Rating rating={ book.rating } />
      <Price originalPrice={book.originalPrice} salePrice={ book.salePrice } />
    </div>
  )
}

export default Book;