import React from 'react'
import soldOut from '../assets/Sold out.png'
import rating1 from '../assets/star.png'
import '../../styles.css'

export default function Card() {
    return (
        <>
            <div className='card-img1'>
                <img src={soldOut} className='status-logo'/>
            </div>
            <img src={rating1} className='rating-1'/>
            <span>
                <span className='bold'>5.0</span> (6) USA
            </span>
            <p>Life Lessons with Katie Zaferes</p>
            <p>
                <span className="bold">From $136</span> / person
            </p>
        </>
    )
}
