// import reactLogo from './assets/react.svg' -- syntax to render the image on the page
import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Card from './Components/Card'
import cardsData from '../data'


// import Zaferes from './assets/image 12.png'
import star from './assets/star.png'

export default function App() {
  const cardsArray = cardsData.map((oneCardData) => {
    return <Card 
              key={oneCardData.id}
              star_img={star}
              
              {...oneCardData}
              // propsObj = {oneCardData}
            />
  })
  return (
      <div>
        <Navbar />
        <Hero />
        <section className='cards-list'>
          {cardsArray}
        </section>
      </div>
  )
}

              // img={oneCardData.coverImg}
              // star_img={star}
              // rating={oneCardData.stats.rating}
              // reviewCount={oneCardData.stats.reviewCount}
              // country={oneCardData.location}
              // title={oneCardData.title}
              // price={oneCardData.price}
              // openSpots={oneCardData.openSpots}