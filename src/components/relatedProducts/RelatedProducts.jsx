import React, { useContext } from 'react'
import './RelatedProducts.css'
import { Item } from '../item/Item'
import { ShopContext } from '../../contexts/ShopContext'

export const RelatedProducts = ({ product }) => {

    const { all_products } = useContext(ShopContext);

    const relatedProducts = all_products.filter((item) => { return item.category === product.category && item.id !== product.id })

    return (
        <div className='related-products'>
            <h2>related products</h2>
            <div className="products-stack">
                {relatedProducts.map((product, index) => {
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
