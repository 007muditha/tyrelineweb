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
                        Test test
                    </span>
                    <span>
                        Test test
                    </span>
                    <span>
                        Test test
                    </span>
                    </span>
                </Col>
            </Row>
            <Row>
                <Col>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        Home
                    </li>
                    <li>
                        Home
                    </li>
                    <li>
                        Home
                    </li>
                </ul>
                </Col>
            </Row>
        </Container>
    )

}

export default Footer