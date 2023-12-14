import React, { createContext, useState } from "react";
import all_products from '../components/assets/all_product';

export const ShopContext = createContext(null);

const getCartData = () => {
    let cart = {};
    for (let index = 0; index < all_products.length; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartProducts, setCartProducts] = useState(getCartData());
    const [cartCount, setCartCount] = useState(0);

    const addToCart = (prodId) => {
        setCartProducts((prevData) => ({ ...prevData, [prodId]: prevData[prodId] + 1 }));
        setCartCount((prevCount) => prevCount + 1);

    }

    const removeFromCart = (prodId) => {
        setCartProducts((prevData) => ({ ...prevData, [prodId]: prevData[prodId] - 1 }));
        setCartCount((prevCount) => prevCount !== 0 ? prevCount - 1 : prevCount);
    }

    const getTotalCartAmount = () => {

        let totalAmount = 0;
        for (const item in cartProducts) {

            if (cartProducts[item] > 0) {

                let prodInfo = all_products.find((product) => product.id === Number(item))
                totalAmount += prodInfo.new_price * cartProducts[item]
            }
        }
        return totalAmount;
    }


    return (

        <ShopContext.Provider value={{ all_products, cartProducts, addToCart, removeFromCart, cartCount, getTotalCartAmount }}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;