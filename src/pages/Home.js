import React from "react"
import './Home.css'
import { Container,Row,Col,Button} from "react-bootstrap"
import HScroll from "../components/hScroll/HScroll"
import SelectBox from "../components/selectBox/SelectBox"
import SliderTyres from "../components/Slider/SliderTyres"
import SliderLogos from "../components/Slider/SliderLogos"
import Social from "../components/Social/Social"
const Home = () => {
    return(
        <Container fluid>
            <Row className="topVideoSection">
                <Col md={6} className="p-0">
                    Text content
                </Col>
                <Col md={6} className="videoContainer p-0">
                <video autoPlay muted loop className="videoBG">
                    <source src="https://tyrelineaustralia.com.au/wp-content/uploads/2021/07/The-Farmer.mp4" type="video/mp4" />
                </video>
                </Col>
            </Row>
            <Row className="searchContainer">
                <Col className="searchBoxCol">
            <Container className="searchBoxInner">
                <Col className="p-0">
                    <SelectBox/>
                </Col>
                <Col  className="p-0">
                    <SelectBox/>
                </Col>
                <Col  className="p-0">
                    <SelectBox/>
                </Col>
                <Col  className="p-0">
                    <SelectBox/>
                </Col>
                <Col  className="p-0">
                    <Button className="searchButton"> Search </Button>
                </Col>
                </Container>
                </Col>
            </Row>

            <Row className="HScrollContainer">
                <Col className="p-0">
                <SliderTyres/>
                </Col>
            </Row>
            <Row className="LogoDisplay">
                <Col>
                <SliderLogos/>
                </Col>
            </Row>
            <Row className="SocialMedia">
                <Col>
                <Social/>
                </Col>
            </Row>
        </Container>
    )
}


export default Home
