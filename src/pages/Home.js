import React from "react"
import './Home.css'
import { Container,Row,Col,Button} from "react-bootstrap"
import HScroll from "../components/hScroll/HScroll"


const Home = () => {
    return(
        <Container fluid>
            <Row>
                <Col md={6}>
                    Text content
                </Col>
                <Col md={6} className="videoContainer">
                <video autoPlay muted loop className="videoBG">
                    <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
                </video>
                </Col>
            </Row>
            <Row>
                <Col>
                <HScroll/>
                </Col>
            </Row>
        </Container>
    )
}


export default Home
