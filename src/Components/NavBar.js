import React from 'react'
import {Container,Nav,Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg"   data-bs-theme="dark" className=" navs ">
      <Container className='p-2'>
        <Navbar.Brand as={Link} to="/"className=' fw-bold text-white'>TAMILNADU TOURISM</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto fw-bold nav-item">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/Places" >Place to Visit</Nav.Link>
            <Nav.Link href="#Best time to Visit">Best time to Visit</Nav.Link>  
            <Nav.Link href="#Packages">Packages</Nav.Link>
            <Nav.Link href="#Destination">Destination</Nav.Link>
            <Nav.Link href="#Food">Food</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar> 


    </div>
  )
}

export default NavBar