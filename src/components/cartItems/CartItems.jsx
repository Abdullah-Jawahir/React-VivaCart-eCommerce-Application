import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../contexts/ShopContext'
import removeIcon from '../assets/cart_cross_icon.png'

export const CartItems = () => {

    const { all_products, cartProducts, removeFromCart } = useContext(ShopContext)

    return (
        <div className='cart-items'>
            <div className="cart-items-header">
                <span>product</span>
                <span>title</span>
                <span>price</span>
                <span>quantity</span>
                <span>total</span>
                <span>remove</span>
            </div>

            <h2 className="cart-items-header-sm">
                Cart Items
            </h2>

            <div className="cart-items-rows">
                {all_products.map((prod) => (
                    cartProducts[prod.id] > 0 && (
                        <div className="row row-item" key={prod.id}>
                            <img className='prod-img' src={prod.image} alt="" />
                            <p className='prod-title'>{prod.name}</p>
                            <p className='prod-price'>${prod.new_price}</p>
                            <span className='prod-quantity'>{cartProducts[prod.id]}</span>
                            <p className='total-price'>${prod.new_price * cartProducts[prod.id]}</p>
                            <i
                                className='bx bx-x remove-prod-icon'
                                src={removeIcon}
                                alt=""
                                onClick={() => removeFromCart(prod.id)}
                            ></i>
                        </div>
                    )
                ))}

            </div>
        </div>
    )
}
