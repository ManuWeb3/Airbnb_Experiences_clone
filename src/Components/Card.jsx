import React from 'react'
// import soldOut from '../assets/Sold out.png'
import '../../styles.css'

export default function Card(props) {
    //console.log(props.openSpots)
    let badgeText                   // default value is undefined (falsy)
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"      // a truthy value
    }
    else if (props.location === "Online") {
        badgeText = "ONLINE"        // a truthy value
    }

    return (
        <div className='card'>

            {
                badgeText != undefined 
                && 
                <div className='card-badge'>{badgeText}</div>
            }

            <img src={props.coverImg} className='card-img'/>
            <div>
                <img src={props.star_img} className='rating' />
                <span>
                    <span className='bold'>{props.stats.rating}</span>
                    ({props.stats.reviewCount}) •{props.location}
                </span>
            </div>
            <p className='card--title'>{props.title}</p>
            <p><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    )
}

