import React, { useContext, useEffect, useState } from 'react'
import './css/ShopCategory.css'
import menBanner from '../components/assets/banner_mens.png'
import womenBanner from '../components/assets/banner_women.png'
import kidsBanner from '../components/assets/banner_kids.png'
import { Sorter } from '../components/sorter/Sorter'
import { Item } from '../components/item/Item'
import { ShopContext } from '../contexts/ShopContext'

export const ShopCategory = ({ category }) => {

    const { all_products } = useContext(ShopContext);

    const [banner, setBanner] = useState(null)

    useEffect(() => {
        if (category === "men") {
            setBanner(menBanner)
        } else if (category === "women") {
            setBanner(womenBanner)
        } else if (category === "kid") {
            setBanner(kidsBanner)
        }
    }, [category])

    return (
        <div className='shop-category'>
            <div className="banner">
                <img src={banner} alt="" />
            </div>

            <Sorter />

            <div className="products">
                {all_products
                    .filter(product => product.category === category)
                    .map((product) => {
                        return (
                            <Item
                                key={product.id}
                                itemId={product.id}
                                name={product.name}
                                image={product.image}
                                new_price={product.new_price}
                                old_price={product.old_price}
                            />
                        )
                    })
                }
            </div>
            <div className="explore-btn">
                <button>Explore More</button>
            </div>
        </div>
    )
}
