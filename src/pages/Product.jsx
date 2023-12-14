import React, { useContext, useRef } from 'react';
import './css/Product.css';
import { ShopContext } from '../contexts/ShopContext';
import { useParams } from 'react-router-dom';
import { Breadcrumb } from '../components/breadcrumb/Breadcrumb';
import { ProductShowcase } from '../components/productShowcase/ProductShowcase';
import { ProdDesc } from '../components/productDesc/ProdDesc';
import { RelatedProducts } from '../components/relatedProducts/RelatedProducts';

export const Product = () => {

    const { all_products } = useContext(ShopContext);
    const { productId } = useParams();

    const product = all_products.find((e) => e.id === Number(productId));

    const generateRandomNum = () => {

        return Math.floor(Math.random() * 900) + 100;
    }

    const randomNum = generateRandomNum();

    return (
        <div className='product'>
            <Breadcrumb product={product} />
            <ProductShowcase product={product} randomNum={randomNum} />
            <ProdDesc randomNum={randomNum} />
            <RelatedProducts product={product} />
        </div>
    )
}
