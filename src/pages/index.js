import React from 'react'
import CareerC from '../components/CareerC'
import ConnectC from '../components/ConnectC'
import HomeC from '../components/HomeC'
import MancaveC from '../components/MancaveC'
import ServicesC from '../components/ServicesC'
import FoundersC from '../components/Founders'
import Footer from '../components/FooterC'
import Home2 from '../components/Home2'


const Home = () => {
  return (
    <div>
        <HomeC />
        <Home2 />
        <ServicesC />
        <MancaveC />
        <FoundersC />
        <CareerC />
        <ConnectC />
        <Footer />
    </div>
  )
}

export default Home