import React from 'react'
import './Popular.css'
import data_products from '../assets/data'
import { Item } from '../item/Item'

export const Popular = () => {
    return (
        <div className='popular'>
            <h2>Popular in Women</h2>
            <div className="popular-items">
                {data_products.map((product, index) => {
                    return (
                        <Item key={index}
                            itemId={product.id}
                            name={product.name}
                            image={product.image}
                            new_price={product.new_price}
                            old_price={product.old_price}
                        />
                    )
                })}
            </div>
        </div>
    )
}
