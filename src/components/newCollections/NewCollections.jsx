import React from 'react'
import './NewCollections.css'
import new_collections from '../assets/new_collections'
import { Item } from '../item/Item'

export const NewCollections = () => {
    return (
        <div className='new-collections'>
            <h2>New Collections</h2>
            <div className="new-collections-products">
                {new_collections.map((product, index) => {

                    return (
                        <Item
                            key={index}
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
