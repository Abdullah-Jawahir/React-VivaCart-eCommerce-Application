import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
    return (
        <div className='newsletter'>
            <div className="letter-box">
                <h2>get exclusive offers on your email</h2>
                <p>Subscribe to our newsletter and stay updated</p>
                <form>
                    <input type="text" placeholder='Your Email Here' />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>
    )
}
