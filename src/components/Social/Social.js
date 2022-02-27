import React,{useState,useEffect} from 'react'
import {Col} from 'react-bootstrap'
import { NavLink } from 'react-bootstrap'
import './Social.css'

const Social = () => {


    const [social,setSocial] = useState([])

    useEffect(() => {
        getSocialData()
    },[])


    const getSocialData = async () => {
        const responce = await fetch('http://localhost:3001/socials');
        const respDataValues = await responce.json();
        if(respDataValues[0] != undefined) {
            setSocial([respDataValues])
        }
        else{
            setSocial([])
        }
    }





    return(
        <>
        {
            social[0]?.map(socialImg => (

                <Col md={3} key={socialImg._id}>
                    <a href={socialImg.link}>
                    <img src={socialImg.image} width="100%"/>
                    </a>
                    <div className="text-center">
                    <a href={socialImg.link}>
                            <img className="socialLinkImage" src={socialImg.linkImage}/>
                        </a>
                        </div>
                </Col>
                ))
        }
        </>
    )

}

export default Social;