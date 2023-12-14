import React from 'react'
import './Offers.css'
import offerImg from '../assets/exclusive_image.png'


export const Offers = () => {
    return (
        <div className='offers'>
            <div className="offer-card">
                <div className="offer-texts">
                    <h2>exclusive offers for you</h2>
                    <h4>only on best sellers products</h4>
                    <button className='offer-btn'>Check Now</button>
                </div>

                <div className="offer-img">
                    <img src={offerImg} alt="" />
                </div>
            </div>
        </div>
    )
}
