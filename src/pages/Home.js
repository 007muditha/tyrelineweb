import React from "react"
import './Home.css'
import { Container,Row,Col,Button} from "react-bootstrap"
import HScroll from "../components/hScroll/HScroll"
import SelectBox from "../components/selectBox/SelectBox"

const Home = () => {
    return(
        <Container fluid>
            <Row className="topVideoSection">
                <Col md={6} className="p-0">
                    Text content
                </Col>
                <Col md={6} className="videoContainer p-0">
                <video autoPlay muted loop className="videoBG">
                    <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
                </video>
                </Col>
            </Row>
            <Row className="searchContainer">
            <Col md={1}></Col>
                <Col md={3} className="p-0">
                    <SelectBox/>
                </Col>
                <Col md={3} className="p-0">
                    <SelectBox/>
                </Col>
                <Col md={3} className="p-0">
                    <SelectBox/>
                </Col>
                <Col md={1}></Col>
            </Row>

            <Row>
                <Col className="p-0">
                <HScroll/>
                </Col>
            </Row>
            <Row>
                <Col>
                    Test
                </Col>
            </Row>
        </Container>
    )
}


export default Home
