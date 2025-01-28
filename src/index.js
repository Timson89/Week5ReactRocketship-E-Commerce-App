// Timothy Olofson
// Frontend Simplified(FES)
// Week 5 - React Rocketship - E-Commerce-App
// January 22nd 2025


import './index.css';

import React           from 'react';
import ReactDOM        from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { library }     from '@fortawesome/fontawesome-svg-core';
import App             from './App.js';

import { faBars, faShoppingCart, faTimes, faBolt, faBookOpen, faTags, faStar, faStarHalfAlt, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
library.add(faBars,faShoppingCart, faTimes, faBolt, faBookOpen, faTags, faStar, faStarHalfAlt, faArrowLeft);

const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(

    <App />
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
