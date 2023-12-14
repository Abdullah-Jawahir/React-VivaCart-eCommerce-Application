import React from 'react'
import './ProdDesc.css'

export const ProdDesc = ({ randomNum }) => {
    return (
        <div className='prod-desc'>
            <div className="desc-header">
                <div className="first">description</div>
                <div className="second">reviews({randomNum})</div>
            </div>
            <div className="desc-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus non, ipsa enim, ullam earum et nesciunt exercitationem mollitia provident praesentium eveniet illum aperiam accusantium iure reiciendis fugit inventore porro, magni suscipit in laudantium iusto nam! Accusantium, dignissimos libero sapiente autem magnam modi fugiat reiciendis veniam aperiam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit architecto sit, amet officia quae modi tempora! Amet blanditiis labore fuga tenetur nisi beatae.</p>
            </div>
        </div>
    )
}
