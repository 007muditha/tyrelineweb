import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import './Footer.css'

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
                    <a className='footerLink' href='/'>
                        Home
                    </a>
                     <span className='seperator'>
                         |
                     </span>
                    <a className='footerLink' href='/about'>
                        About
                    </a>
                    <span className='seperator'>
                         |
                     </span>
                    <a className='footerLink' href='/brands'>
                        Brands
                    </a>
                    <span className='seperator'>
                         |
                     </span>
                    <a className='footerLink' href='/contactus'>
                        Contact Us
                    </a>
                </Col>
            </Row>
        </Container>
    )

}

export default Footer