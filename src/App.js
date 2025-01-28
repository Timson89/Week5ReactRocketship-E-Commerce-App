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


  const [cart, setCart] = useState([]);

  function addToCart(book){

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

    //   setCart([...cart, {...book, quantity: 1 }])
    // }

    setCart([...cart, book]);
  }

  useEffect(() => {

    console.log(cart)

  }, [cart]);


  return (
    
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact  render={() => <Books books={ books } /> } />
        <Route path="/books/:id" render={() => <BooksInfo books={ books } addToCart={ addToCart } /> } />
        <Route path="/cart" render={() => <Cart books={ books } /> } />
        <Footer />
      </div>
    </Router>
  );
}

export default App;