import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import './Footer.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {

    return(
        <>
        <Container fluid className="footerContainer">
            <Container>
            <Row>
                <Col  md={6}>
                    <Row>
                        <Col>
                        <img src="https://tyrelineimg.s3.amazonaws.com/TyreLine-Logo.png" className='footerImg'/>
                        </Col>

                    </Row>
                </Col >
                <Col  md={2}>
                <ul className='footerList'>
                    <li>
                        <strong>
                        Brands
                        </strong>
                    </li>
                    <li>
                        Brand 1 ( dummy )
                    </li>
                    <li>
                        Brand 2 ( dummy )
                    </li>
                    <li>
                        Brand 3 ( dummy )
                    </li>
                </ul>
                </Col>
                <Col md={2}>
                <ul  className='footerList'>
                    <li>
                        <strong>
                        <NavLink className="footerLink" to="about">
                     About 
                     </NavLink>
                        </strong>
                    </li>
                    <li>
                        Link 1
                    </li>
                    <li>
                        Link 1
                    </li>
                    <li>
                        Link 1
                    </li>
                </ul>
                </Col>
                <Col md={2}>
                <ul  className='footerList'>
                    <li>
                        <strong>
                        Catagories
                        </strong>
                    </li>
                    <li>
                        4x4
                    </li>
                    <li>
                        Tractor
                    </li>
                    <li>
                        2x2
                    </li>
                    <li>
                        Van
                    </li>
                </ul>
                </Col>

            </Row>
            <Row>
                    <Col>
                        <span className='footerText mt-4'> 
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
                        <Col className="footerSocial">
                        <a href='https://www.facebook.com/tyrelineaus' target="_blank">
                            <img className='socialImageFooter' src="https://tyrelineimg.s3.amazonaws.com/icons/fb.png"/>
                        </a>
                        <a href='https://www.instagram.com/tyrelineaus' target="_blank">
                        <img className='socialImageFooter' src="https://tyrelineimg.s3.amazonaws.com/icons/insta.png"/>
                        </a>
                        <a href="https://www.linkedin.com/company/tyrelineaustralia/" target="_blank">
                        <img className='socialImageFooter' src="https://tyrelineimg.s3.amazonaws.com/icons/in.png"/>
                        </a>
                        </Col>

                    </Row>
            </Container>
        </Container>
        </>
    )

}

export default Footer