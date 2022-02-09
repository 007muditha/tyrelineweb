import React from 'react'
import { NavLink } from 'react-bootstrap'
import './Social.css'

const Social = () => {

    const Images=[
        "https://tyrelineimg.s3.amazonaws.com/1.png",
        "https://tyrelineimg.s3.amazonaws.com/3.png",
        "https://scontent.fcmb11-1.fna.fbcdn.net/v/t39.30808-6/272999855_151680883902189_6635116421581794352_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=9267fe&_nc_eui2=AeFTC-RnCtIXn61eUTQNDeZInRNS8aYBwNqdE1LxpgHA2mWzfV72vr3UlRnmSqo77S0&_nc_ohc=OvTe3emT7kMAX8Z1Cqr&_nc_ht=scontent.fcmb11-1.fna&oh=00_AT8-R2vIIP9rmQWNSmHKpDrpp7a_foRr2EShBV90lioXyA&oe=6207E206",
        "https://tyrelineimg.s3.amazonaws.com/Artboard+1.png",
        "https://scontent.fcmb11-1.fna.fbcdn.net/v/t39.30808-6/s640x640/272796312_149962470740697_5308781786200234990_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHdxIYxDtb53L8pHMnJrMESSqn4KfHKVZ9Kqfgp8cpVn4xu0URw0eXqNBeWYfOuF_c&_nc_ohc=zWr2Nms5xpoAX-2VCTP&_nc_ht=scontent.fcmb11-1.fna&oh=00_AT8KL43Nh89rbUBALT4DbbUl4ogdN_TE_KvuS6ksmFzFTA&oe=6207E17C",
    ]

    return(
        <div>
            <h2 className='socialHeader'>Social Media Content</h2>
        <div className="socialImageContainer">
            {Images.map(poster => (
                <a href="https://www.facebook.com/tyrelineaus" target="_blank">
                    <img className="socialImage" src={poster}/>
                    </a>
            ))}
        </div>
        
        </div>
    )

}

export default Social;