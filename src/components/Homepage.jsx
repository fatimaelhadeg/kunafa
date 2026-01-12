import React from 'react'
import Hero from './Hero';
import FoodsList from './FoodsList';
import Process from '../pages/Process';
import SpecialOffer from './SpecialOffer';
//import Timing from "../pages/Timing";
import Reviews from '../pages/Reviews';

const Homepage = () => {
  return (
    <div>
       <Hero />
       <FoodsList />
       <SpecialOffer />
       <Process />
       <Reviews />
    </div>
  )
}

export default Homepage