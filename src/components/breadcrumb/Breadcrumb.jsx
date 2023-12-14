import React from 'react';
import './Breadcrumb.css';
import arrowIcon from '../assets/breadcrum_arrow.png'

export const Breadcrumb = ({ product }) => {

    return (
        <div className='breadcrumb'>
            home <img src={arrowIcon} alt='arrow Icon' /> shop <img src={arrowIcon} alt='arrow Icon' /> {product.category} <img src={arrowIcon} alt='arrow Icon' /> {product.name}
        </div>
    )
}
