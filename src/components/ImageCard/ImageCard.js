import React from "react";
import './ImageCard.css'


const brandImage= "https://tyrelineaustralia.com.au/wp-content/uploads/2021/07/Michelin-Logo.svg"

const ImageCard = (props) => {
    return(
        <div className="ewalkImageCard">
            <img className="ImagecardImage" src={props.image}/>
        </div>
    )
}

export default ImageCard