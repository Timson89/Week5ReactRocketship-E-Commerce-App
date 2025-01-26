// Timothy Olofson
// Frontend Simplified(FES)
// Week 5 - React Rocketship - E-Commerce-App
// January 22nd 2025


import './App.css';

import Nav                              from './components/Nav.jsx';
import Home                             from './pages/Home.jsx';
import Books                            from './pages/Books.jsx';
import Footer                           from './components/Footer.jsx';
import { books }                        from './data.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {

  return (
    
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" render={() => <Books books={books} /> } />
        <Footer />
      </div>
    </Router>
  );
}

export default App;