import React from 'react'
import { useCart } from '../context/CartContext'
import CartItems from './CartItems'

const Cart = () => {
    const {cartItems}  = useCart()
  return (
    <>
        <div>
            {cartItems && cartItems.map(item => (
                <CartItems key = {item.id} {...item}/>
            ))}
        </div>
    </>
  )
}

export default Cart