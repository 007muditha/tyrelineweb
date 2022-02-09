import React from "react"
import './Home.css'
import { Container,Row,Col,Button} from "react-bootstrap"
import HScroll from "../components/hScroll/HScroll"
import SelectBox from "../components/selectBox/SelectBox"
import SliderTyres from "../components/Slider/SliderTyres"
import SliderLogos from "../components/Slider/SliderLogos"
import Social from "../components/Social/Social"
import { Link, NavLink } from "react-router-dom"
const Home = () => {
    return(
        <Container fluid>
            <Row className="topVideoSection">
                <Col md={6} className="topVideoTextSection">
                    <span className="text-left topVideoTextSectionHeader">
                    Bringing the
                    </span>
                    <span className="text-left topVideoTextSectionHeader">
                    world’s best tyres
                    </span>
                    <span className="text-left topVideoTextSectionHeader">
                    to you …
                    </span>
                    <span className="text-left topVideoTextSectionText">
                    We’re looking forward to working with you as your new agriculture partner! 
                    </span>
                </Col>
                <Col md={6} className="videoContainer p-0">
                <video autoPlay muted loop className="videoBG">
                    <source src="https://tyrelineimg.s3.amazonaws.com/GRI+-+We'll+get+you+there.mp4" type="video/mp4" />
                </video>
                </Col>
            </Row>
            <Row className="searchContainer">
                <Col className="searchBoxCol">
                <h2 className='brandsHeaderWhite'>Find Your Product</h2>
            <Container className="searchBoxInner">
                
                <Row className="searchBoxTemp">
                    <Col lg={10} md={10} className="searchBoxTempText">
                        We are on the Remake for a better user experience. You will be redirected to our existing site with this button to view our products
                    </Col>
                    <Col>

                    <Button href="https://tyrelineaustralia.com.au/products/" className="searchButton" variant="warning">
                            Click To View Products
                        </Button>

                    </Col>
                </Row>
                {/* <Row>
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
                    <Button variant="warning" className="searchButton"> Search </Button>
                </Col>
                </Row> */}
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
