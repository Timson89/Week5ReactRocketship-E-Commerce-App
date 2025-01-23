// Timothy Olofson
// Frontend Simplified(FES)
// Week 5 - React Rocketship - E-Commerce-App
// January 22nd 2025


import './App.css';
import Nav        from './components/Nav.jsx';
import Landing    from './components/Landing.jsx';
import Highlights from './components/Highlights.jsx';
import Featured   from './components/Featured.jsx';


function App() {

  return (
    
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
    </div>
  );
}

export default App;