import React from 'react'
import './Nav.css'
import {NavLink} from 'react-router-dom'
import {Container,Navbar,Nav, Button,NavDropdown} from 'react-bootstrap'
const Navb = () => {
    return(
        <div>
        <Navbar className='navBarColor' expand="lg">
  <Container fluid className='topNavBar'>
    <Navbar.Brand href="#">
      <img className='topImageLogo' src='https://tyrelineaustralia.com.au/wp-content/uploads/2021/06/TyreLine-Logo.svg'/>
</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0 topNav"
      >
          <span className="navLink p-1"><NavLink to="" >Home</NavLink></span>
          <span className="navLink p-1">
          <NavDropdown className="dropdownLink" title="Brands">
          <NavDropdown.Item className='navLink' href="/brands/gri">GRI</NavDropdown.Item>
          <NavDropdown.Item className='navLink' href="/brands/michellin">Michelin</NavDropdown.Item>
          <NavDropdown.Item className='navLink' href="/brands/atlas">Atlas</NavDropdown.Item>
          <NavDropdown.Item className='navLink' href="/brands/contenental">Continental</NavDropdown.Item>
        </NavDropdown>
        </span>
          {/* <span className="navLink p-1"><NavLink className="navLink" to="brands">Brands</NavLink></span> */}
          <span className="navLink p-1"> <NavLink className="navLink" to="about">About Us</NavLink></span>
          <span className="navLink p-1"><NavLink className="navLink" to="contactus">Contact Us</NavLink></span>
          <span className="navLink p-1"><NavLink className="navLink" to="resources">Resources</NavLink></span>
          <Button variant='warning' href='https://secure.megabus.com.au/TLINHO' target='_'>Dealer Login</Button>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
















        </div>

    )
}

export default Navb