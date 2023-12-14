import React, { useContext } from 'react'
import './CartTotal.css'
import { ShopContext } from '../../contexts/ShopContext'

export const CartTotal = () => {

    const { getTotalCartAmount } = useContext(ShopContext);

    return (
        <div className='cart-total'>
            <div className="cart-total-left">
                <h3>cart total</h3>
                <div className="amounts">
                    <div className="subtotal">
                        <p>subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <div className="shipping">
                        <p>shipping fee</p>
                        <p>free</p>
                    </div>
                    <div className="total">
                        <p>total</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                </div>
                <button>proceed to checkout</button>
            </div>
            <div className="cart-total-right">
                <p>If you have a promo code, Enter it here</p>
                <div className="promo-box">
                    <input type="text" placeholder='Promo Code' />
                    <button>submit</button>
                </div>
            </div>
        </div>
    )
}
