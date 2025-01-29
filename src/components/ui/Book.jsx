import React, { useEffect, useRef, useState }    from 'react';
import { Link } from 'react-router-dom';
import Rating   from '../ui/Rating';
import Price    from '../Price.jsx';   


const Book = ({ book }) => {
  

  const [img, setImg] = useState();
  const mountedRef = useRef(true);

  useEffect(() => {

      const image= new Image();
      image.src = book.url;
      image.onload = () => {

        setTimeout(() => {

          if (mountedRef.current){
            
            setImg(image);
          }
        }, 500);
      }
      return () => {

        // When the component unmounts. //

        mountedRef.current = false;
      }
    }
  )

  // Sneak peek at  how the skeleton loading state looks. //

  // function imageLoaded(){

  //   console.log('loading images...')
  // }

  return (

    <div className="book">
      { img 
        ? ( <>
          <Link to={`/books/${ book.id }`}>
            <figure className="book__img--wrapper">
              <img className="book__img" src={ img.src } alt="A Book Cover"/>
            </figure>
          </Link>
          <div className=" ">
            <Link className='book__title--link' to={`/books/${ book.id }`}>
              { book.title }
            </Link>
          </div>
          <Rating rating={ book.rating } />
          <Price originalPrice={ book.originalPrice } salePrice={ book.salePrice } />
        </>
        ) : ( <>
          <div className="book__img--skeleton"></div>
          <div className="skeleton book__title--skeleton"></div>
          <div className="skeleton book__rating--skeleton"></div>
          <div className="skeleton book__price--skeleton"></div>
        </> 
        )
      }
    </div>
  )
}

export default Book;