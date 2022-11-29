import React from 'react'
import OrderItems from "../api/orderItems.json"
import StoreItems from '../components/StoreItems'
const Store = () => {
  return (
    <>
    <h1 className='text-3xl text-center mt-5'>Pick your favourites!</h1>
    {
        OrderItems && OrderItems.map(item => {
            return(
                <div className='flex px-10 justify-center items-center p-5 mb-3 text-center' key={item.id}>
                    <StoreItems {...item}/>
                </div>
            )
        })
     }
    </>
  )
}

export default Store