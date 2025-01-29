// Timothy Olofson
// Frontend Simplified(FES)
// Week 5 - React Rocketship - E-Commerce-App
// January 22nd 2025


import './App.css';

import React, { useEffect, useState }   from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { books }                        from './data.js';
import Nav                              from './components/Nav.jsx';
import Home                             from './pages/Home.jsx';
import Books                            from './pages/Books.jsx';
import BooksInfo                        from './pages/BooksInfo.jsx';    
import Footer                           from './components/Footer.jsx';
import Cart                             from './pages/Cart.jsx';


function App() {


  // *** See commented out Code below on how to add more than one of the same book to Cart... *** //

  const [cart, setCart] = useState([ ]);

  function addToCart(book){

    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function changeQty(book, quantity){

      setCart(cart.map((item) => item.id === book.id

        ? { ...item, quantity: +quantity } 
        : item
      )
    )
  }

  function removeBookFromCart(item){

    setCart(cart.filter((book) => book.id !== item.id))

    // console.log('removed item', item)
  }

  function cartCounter(){

    let counter = 0;

      cart.forEach((item) => {

        counter += item.quantity
      }
    )
    return counter;
  }

  useEffect(() => { 
    
    // console.log(cart);

  }, [cart]);


  return (
    
    <Router>
      <div className="App">
        <Nav cartCounter={ cartCounter() } />
        <Route path="/"      exact  component={ Home } />
        <Route path="/books" exact  render={() => <Books     books={ books } /> } />
        <Route path="/books/:id"    render={() => <BooksInfo books={ books } cart={ cart } addToCart={ addToCart } /> } />
        <Route path="/cart"         render={() => <Cart      books={ books } cart={ cart } changeQty={ changeQty } removeBookFromCart={ removeBookFromCart } /> } />
        <Footer />
      </div>
    </Router>
  );
}

export default App;


    // *** How to add multiple books to Cart... *** //

    // const dupeItem = cart.find(item => +item.id === +book.id)

    // if (dupeItem){

    //   setCart(cart.map(item => {

    //     if (item.id === dupeItem.id){

    //       return {

    //       ...item, quantity: item.quantity += (1)
    //       }
    //     } else {

    //       return item;
    //     }
    //   }))
    // } else {

    //   setCart([...cart, { ...book, quantity: 1 }])
    // }