import React,{useContext} from 'react'
import {ShopContext} from './ShopContext'

const FoodsList = () => {
const { Foods, addCart } = useContext(ShopContext) 
  return (

    <div className='w-full mx-auto px-6 text-center mt-20'>
      <h2 className='text-3xl font-demibold mb-8 text-gray-800'>Our Deliciuos BaKlaVa</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {Foods.map((Food)=>{
          const {id,image,name,price}=Food
          return (
            <div key={id} className='bg-white border border-gray-200 rounded-lg p-4 shadow-md transition-transform duration-200 hover:-transition-y-1'> 
          <img src={image} alt="" className='h-100 w-full object-contain rounded-lg transform scale-90 hover:scale-100  transition-transform duration-300'/>
          <div className='mt-4'>
             <h4 className='text-lg font-semibold text-gray-900'>{name}</h4>
            <p className='text-gray-600'>{price}</p>
          </div>
          <button onClick={()=> addCart(Food,id)} className='w-full py-2 mt-4 text-lg font-medium text-white bg-amber-600 rounded-md hover:bg-amber-700 transition duration-300'>Add To Cart</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FoodsList