import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css'; //NOTE: Include our css AFTER bootstrap to override it!

function Navbar() {
  return (
    <div className="App">
      {/*<Nav.Link eventKey="link-1">Link</Nav.Link> */}
      
      <Nav variant="underline" className="Navbar-header" activeKey="/home">
      {/*
        <Nav.Item>
          <Nav.Link href="/home" className='Navbar-item'>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          
          <Nav.Link href="/portfolio" className='Navbar-item'>Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/portfolio" className='Navbar-item'>Resume</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/portfolio" className='Navbar-item'>Contact</Nav.Link>
        </Nav.Item>
        */}
      </Nav>
      
    </div>
  );
}

export default Navbar;