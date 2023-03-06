import React from 'react'
// import image22 from '../assets/image 22.png'
// import image23 from '../assets/image 23.png'
// import image24 from '../assets/image 24.png'
import group77 from '../assets/Group 77.png'
import '../../styles.css'

export default function Hero() {
    return (
        <div>
            <img src={group77} className='group-img'/>
            <h1 className='hero-title'>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind- hosts-all without leaving home</p>
        </div>
    )
}

// export default function Hero() {
//   return (
//       <div className='grid-main-div'>
//         <div>
//             <img src={image22} className="grid-img22"/>
//         </div>
//         <div>
//             <div>
//                 <img src={image23} className="grid-img23"/>
//             </div>
//             <div>
//                 <img src={image24} className="grid-img24"/>
//             </div>
//         </div>
//       </div>
//   )
// }
