import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import './Footer.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {

    return(
        <Container>
            <Row>
                <Col className='footer'>
                    <img src="https://tyrelineimg.s3.amazonaws.com/TyreLine-Logo.png" className='footerImg'/>
                    <span className='footerText'> 
                    <span>
                        52, Boundary Road,
                    </span>
                    <span>
                        Sunshine West,
                    </span>
                    <span>
                        VIC 3020
                    </span>
                    </span>
                </Col>
            </Row>
            <Row>
                <Col className='footerContent'>
                <NavLink className="footerLink" to="">
                        Home
                    </NavLink>
                     <span className='seperator'>
                         |
                     </span>
                     <NavLink className="footerLink" to="about">
                     About 
                     </NavLink>
                    <span className='seperator'>
                         |
                     </span>
                     <NavLink className="footerLink" to="brands">
                     Brands
                     </NavLink>
                    <span className='seperator'>
                         |
                     </span>
                     <NavLink className="footerLink" to="contactus">
                     Contact Us
                     </NavLink>

                </Col>
            </Row>
        </Container>
    )

}

export default Footer