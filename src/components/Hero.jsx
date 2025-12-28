import React from 'react'
import baklava1 from '../assets/img/baklava1.jpg'
import baklava2 from '../assets/img/baklava2.jpg'
import baklava3 from '../assets/img/baklava3.jpg'


const Hero = () => {
  return (
    <div className='hero h-screen flex flex-col items-center'>
      <div className='flex justify-between items-center gap-4 w-full max-w-screen mt-16'>
        <div className='flex'>
          <img src={baklava1} alt="" className='w-[630px] h-[580px] object-cover ml-12 mt-8 rounded-[50%] border-8 border-white'/>
          <img src={baklava2} alt="" className='w-[430px] h-[430px] object-cover ml-12 mt-46 rounded-[50%] border-8 border-white'/>
          <img src={baklava3} alt="" className='w-[350px] h-[350px] object-cover ml-12 mt-78 rounded-[50%] border-8 border-white'/>
        </div>

        <div className='max-w-1/2 mt-12'>
          <h1 className='text-6xl font-bold text-white -mt-80 leading-tight'>DELICIOUS BACLAVA</h1>
          <p className='text-lg font-bold mt-4 text-white'>Delicious baklava is a golden, crunchy pastry made with layers of dough,
             nuts, and sweet syrup. Its rich flavor makes it a truly delightful dessert.</p>
        </div>

      </div>
    </div>
  )
}

export default Hero