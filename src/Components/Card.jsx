import React from 'react'
// import soldOut from '../assets/Sold out.png'
import '../../styles.css'

export default function Card(props) {
    //console.log(props)
    return (
        <div className='card'>
            <img src={props.img} className='card-img'/>
            <div>
                <img src={props.star_img} className='rating' />
                <span>
                    <span className='bold'>{props.rating}</span>
                    ({props.reviewCount}) •{props.country}
                </span>
            </div>
            <p className='card--title'>{props.title}</p>
            <p><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    )
}

// <>
        //     <div className='card-img1'>
        //         <img src={soldOut} className='status-logo'/>
        //     </div>
        //     <img src={rating1} className='rating-1'/>
        //     <span>
        //         <span className='bold'>5.0</span> (6) USA
        //     </span>
        //     <p>Life Lessons with Katie Zaferes</p>
        //     <p>
        //         <span className="bold">From $136</span> / person
        //     </p>
        // </>