import logo from './logo.svg';


import Container from 'react-bootstrap/Container';
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'; //NOTE: Include our css AFTER bootstrap to override it!

function App() {
  return (
    <div>
      <Navbar />
      <Home /> 
    </div>
    
  );
}

export default App;
