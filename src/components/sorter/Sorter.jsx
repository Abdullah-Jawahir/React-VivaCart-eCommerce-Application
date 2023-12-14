import React from 'react'
import './Sorter.css'

export const Sorter = () => {
    return (
        <div className="sorter">
            <div className='sorter-left'>
                <p><strong>Showing 1 - 12</strong> out of 54 products</p>
            </div>
            <form className='sorter-form'>
                <select name="sort" id="sort">
                    <option>Sort by</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>

            </form>
        </div >
    )
}
