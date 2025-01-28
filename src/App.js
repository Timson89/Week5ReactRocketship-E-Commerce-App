// Timothy Olofson
// Frontend Simplified(FES)
// Week 5 - React Rocketship - E-Commerce-App
// January 22nd 2025


import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import { books }                        from './data.js';
import Nav                              from './components/Nav.jsx';
import Home                             from './pages/Home.jsx';
import Books                            from './pages/Books.jsx';
import BooksInfo                        from './pages/BooksInfo.jsx';    
import Footer                           from './components/Footer.jsx';


function App() {

  return (
    
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact  render={() => <Books books={books} /> } />
        <Route path="/books/:id" render={() => <BooksInfo books={books} /> } />
        <Footer />
      </div>
    </Router>
  );
}

export default App;