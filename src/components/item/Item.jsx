import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

export const Item = (props) => {

    const productId = props.itemId

    return (

        <div className='item-card' onClick={window.scrollTo(0, 0)}>
            <Link to={`/product/${productId}`} className='item' >
                <img src={props.image} alt="" />
                <p>{props.name}</p>
                <div className="item-prices">
                    <div className="item-price-new">
                        ${props.new_price}
                    </div>
                    <div className="item-price-old">
                        ${props.old_price}
                    </div>
                </div>
            </Link>
        </div>
    )
}
