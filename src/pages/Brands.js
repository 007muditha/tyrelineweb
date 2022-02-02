import { Container, Row, Col, Button } from "react-bootstrap"
import SelectBox from "../components/selectBox/SelectBox"
import SliderTyres from "../components/Slider/SliderTyres"
import './Brands.css'
const Brands = () => {


    const BrandsSet = [
        "img1",
        "img2",
        "img3",
        "img4",
        "img5"
    ]

    const VehicleSet = [
        "img1",
        "img2",
        "img3",
        "img4",
        "img5"
    ]

    const ApplicationSet = [
        "img1",
        "img2",
        "img3",
        "img4",
        "img5"
    ]

    return(
        <>
        <Container fluid>
            <Row>
                <Col>
                Products
                </Col>
            </Row>
            <Row>
                <Col>
            <Container>
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
        <Container>
            <Row>
                <Col>
                Search By Brand
                </Col>
            </Row>
            <Row>
                {BrandsSet.map(brand => (
                    <Col lg={4}>
                    <img src={brand} alt="brandImage"/>
                                        </Col>
                ))}
            </Row>
        </Container>
        <Container>
            <Row>
                <Col>
                Search By Vehicle
                </Col>
            </Row>
            <Row>
                {VehicleSet.map(vehicle => (
                    <Col lg={4}>
                    <img src={vehicle} alt="brandImage"/>
                                        </Col>
                ))}
            </Row>
        </Container>
        <Container>
            <Row>
                <Col>
                Search By Application
                </Col>
            </Row>
            <Row>
                {ApplicationSet.map(application => (
                    <Col lg={4}>
                    <img src={application} alt="brandImage"/>
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