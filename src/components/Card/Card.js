import React from "react";
import './Card.css'
import { Button } from "react-bootstrap";

const sampleImgLink = "https://tyrelineaustralia.com.au/wp-content/uploads/2021/06/AGRIBIB-Tyre.png"
const brandImage= "https://tyrelineaustralia.com.au/wp-content/uploads/2021/07/Michelin-Logo.svg"
const code = "M12S25"

const Card = () => {
    return(
        <div className="ewalkCard">
            <img className="cardImage" src={sampleImgLink}/>
            <img src={brandImage} className="brandImage"/>
            <p className="cardText">
                {code}
            </p>
        </div>
    )
}

export default Card