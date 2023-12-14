import React, { useContext } from 'react'
import './ProductShowcase.css'
import startIcon from '../assets/star_icon.png'
import startDullIcon from '../assets/star_dull_icon.png'
import { ShopContext } from '../../contexts/ShopContext'

export const ProductShowcase = ({ product, randomNum }) => {

    const { addToCart } = useContext(ShopContext);

    return (
        <div className='product-showcase'>
            <div className="showcase-left">
                <div className="left">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="right">
                    <img src={product.image} alt="" />
                </div>
            </div>
            <div className="showcase-right">
                <h2>{product.name}</h2>
                <div className="ratings">
                    <img src={startIcon} alt="" />
                    <img src={startIcon} alt="" />
                    <img src={startIcon} alt="" />
                    <img src={startIcon} alt="" />
                    <img src={startDullIcon} alt="" />
                    <span>{`(${randomNum})`}</span>
                </div>
                <div className="prices">
                    <p className="old-price">${product.old_price}</p>
                    <p className="new-price">${product.new_price}</p>
                </div>
                <p className="product-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque beatae a tempore consectetur expedit.
                </p>
                <div className="product-size">
                    <h4>Select Size</h4>
                    <div className="sizes">
                        <div className="size">s</div>
                        <div className="size">m</div>
                        <div className="size">l</div>
                        <div className="size">xl</div>
                        <div className="size">xxl</div>
                    </div>
                </div>
                <button onClick={() => { addToCart(product.id) }}>add to cart</button>
                <div className="features">
                    <p><strong>Cateogry: </strong>{product.category}</p>
                    <p><strong>Tags: </strong>Modern, Latest, Fashion</p>
                </div>
            </div>
        </div>
    )
}
