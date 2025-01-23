import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Book = ({ book }) => {

  return (

    <div className="book">
      <a href="">
        <figure className="book__img--wrapper">
          <img className="book__img" src={ book.url } alt="A Book Cover" />
        </figure>
      </a>
      <div className="book__title">
        <a className='book__title--link' href="/">
          { book.title }
        </a>
      </div>
      <div className="book__ratings">
        {
          new Array(4).fill(0).map((_, idx) => <FontAwesomeIcon icon={'star'} key={ idx } />)
        }
      </div>
      <div className="book__price">
        { book.salePrice ? ( <> 
          ? <span className="book__price--normal">${ book.originalPrice.toFixed(2) }</span>${ book.salePrice.toFixed(2) } </> ) 
          : <>${ book.originalPrice.toFixed(2) }</>
        }
      </div>
    </div>
  )
}

export default Book