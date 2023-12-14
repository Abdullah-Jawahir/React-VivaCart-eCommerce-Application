import React from 'react'
import { CartItems } from '../components/cartItems/CartItems'
import { CartTotal } from '../components/cartTotal/CartTotal'

export const Cart = () => {
    return (
        <div>
            <CartItems />
            <CartTotal />
        </div>
    )
}
