import { Container, Row, Col, Button } from "react-bootstrap"
import SelectBox from "../components/selectBox/SelectBox"
import SliderTyres from "../components/Slider/SliderTyres"
import './Brands.css'
const Brands = () => {


    const BrandsSet = [
        "https://tyrelineaustralia.com.au/wp-content/uploads/2021/07/Michelin-Logo.svg",
        "https://tyrelineimg.s3.amazonaws.com/Ovation_Logo_Orange_Black-768x427.png",
        "https://tyrelineimg.s3.amazonaws.com/491636693771_.pic.jpg",
        "https://tyrelineaustralia.com.au/wp-content/uploads/2021/07/GRI-Tyres-Logo.svg",
        "https://tyrelineaustralia.com.au/wp-content/uploads/2021/07/Continental-Tyres-Logo.svg"
    ]

    const VehicleSet = [
        "https://tyrelineaustralia.com.au/wp-content/uploads/2021/07/Michelin-Logo.svg",
        "https://tyrelineimg.s3.amazonaws.com/Ovation_Logo_Orange_Black-768x427.png",
        "https://tyrelineimg.s3.amazonaws.com/491636693771_.pic.jpg",
        "https://tyrelineaustralia.com.au/wp-content/uploads/2021/07/GRI-Tyres-Logo.svg",
        "https://tyrelineaustralia.com.au/wp-content/uploads/2021/07/Continental-Tyres-Logo.svg"
    ]

    const ApplicationSet = [
        "https://tyrelineimg.s3.amazonaws.com/tractor+(1).png",
        "https://tyrelineimg.s3.amazonaws.com/dumper-truck.png",
        "https://tyrelineimg.s3.amazonaws.com/loader.png"
    ]

    return(
        <>
        <Container fluid className="brandsTopContainer">
            <Row >
                <Col className="brandsTopContainerHeading">
                Products
                </Col>
            </Row>
            <Row>
                <Col>
            <Container className="brandsSearchContainer">
                <Row>
                    <Col className="brandsSearchContainerHeading">
                    Find the Right Tyre!
                    </Col>
                </Row>
            <Row>
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
                    <Button className="brandsPadding"> Search </Button>
                </Col>
                </Row>
                </Container>
                </Col>
            </Row>

        </Container>
        <Container className="brandSearchbyContainer">
            <Row>
                <Col  className="brandSearchbyContainerHeader">
                Search By Brand
                </Col>
            </Row>
            <Row>
                {BrandsSet.map(brand => (
                    <Col lg={4} className="BrandbrandImageContainer">
                    <img src={brand} alt="brandImage" className="BrandbrandImage"/>
                                        </Col>
                ))}
            </Row>
        </Container>
        <Container className="brandSearchbyContainer">
            <Row>
                <Col  className="brandSearchbyContainerHeader">
                Search By Vehicle
                </Col>
            </Row>
            <Row>
                {VehicleSet.map(vehicle => (
                    <Col lg={4} className="BrandbrandImageContainer">
                    <img src={vehicle} alt="brandImage" className="BrandbrandImage"/>
                                        </Col>
                ))}
            </Row>
        </Container>
        <Container className="brandSearchbyContainer">
            <Row>
                <Col  className="brandSearchbyContainerHeader">
                Search By Application
                </Col>
            </Row>
            <Row>
                {ApplicationSet.map(vehicle => (
                    <Col lg={4} className="BrandbrandImageContainer">
                    <img src={vehicle} alt="brandImage" className="BrandbrandImage"/>
                                        </Col>
                ))}
            </Row>
        </Container>
        <Container fluid>
        <Row className="HScrollContainer">
                <Col className="p-0">
                <SliderTyres/>
                </Col>
            </Row>
        </Container>
        </>
    )

}


export default Brands