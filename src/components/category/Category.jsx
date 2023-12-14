// import React, { useContext, useEffect, useState } from 'react'
// import './Category.css'
// import menBanner from '../assets/banner_mens.png'
// import womenBanner from '../assets/banner_women.png'
// import kidsBanner from '../assets/banner_kids.png'
// import { Sorter } from '../sorter/Sorter'
// import { Item } from '../item/Item'
// import { ShopContext } from '../../contexts/ShopContext'

// export const Category = ({ category }) => {

//     const all_products = useContext(ShopContext);

//     const [banner, setBanner] = useState(null)

//     useEffect(() => {
//         if (category === "men") {
//             setBanner(menBanner)
//         } else if (category === "women") {
//             setBanner(womenBanner)
//         } else if (category === "kid") {
//             setBanner(kidsBanner)
//         }
//     }, [category])

//     if (!all_products) {
//         return (
//             <>
//                 <p>Loading...</p>
//             </>

//         )
//     } else {

//         return (
//             <div className='category'>
//                 <div className="banner">
//                     <img src={banner} alt="" />
//                 </div>

//                 <Sorter />

//                 <div className="products">
//                     {all_products
//                         .filter(product => product.category === category)
//                         .map((product) => {
//                             return (
//                                 <Item
//                                     key={product.id}
//                                     itemId={product.id}
//                                     name={product.name}
//                                     image={product.image}
//                                     new_price={product.new_price}
//                                     old_price={product.old_price}
//                                 />
//                             )
//                         })
//                     }
//                 </div>

//             </div>
//         )

//     }


// }
