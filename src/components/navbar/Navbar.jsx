import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import logoBig from '../assets/vivacart-logo-big.png';
import cartIcon from '../assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../contexts/ShopContext';


export const Navbar = () => {

    const initialActiveMenu = sessionStorage.getItem('activeMenu') || '';

    const [activeMenu, setActiveMenu] = useState(initialActiveMenu);
    const [isBxIconClicked, setIsBxIconClicked] = useState(false)

    useEffect(() => {
        sessionStorage.setItem('activeMenu', activeMenu);
    }, [activeMenu, isBxIconClicked]);

    const { cartCount } = useContext(ShopContext);

    const handleBxIconClick = () => {

        setIsBxIconClicked((prev) => !prev);
        setActiveMenu("");
    }


    return (
        <div className='navbar'>
            <div className="logo nav-logo">
                <Link to='/' onClick={() => { setActiveMenu("shop") }}><img src={logoBig} alt="logo" /></Link>
            </div>

            <i
                onClick={() => { handleBxIconClick() }}
                className={`bx ${isBxIconClicked ? 'bx-x' : 'bx-menu-alt-left'}`}>

            </i>

            <nav className={`nav-list ${isBxIconClicked ? 'open-nav-list' : ''}`}>
                <span
                    onClick={() => { setActiveMenu("shop") }}
                    className={`nav-item ${activeMenu === "shop" ? 'active' : ''} ${isBxIconClicked ? 'show' : ''}`}>
                    <Link to='/'>shop</Link>
                </span>
                <span
                    onClick={() => { setActiveMenu("men") }}
                    className={`nav-item ${activeMenu === "men" ? 'active' : ''} ${isBxIconClicked ? 'show' : ''}`}>
                    <Link to='/men'>men</Link>
                </span>
                <span
                    onClick={() => { setActiveMenu("women") }}
                    className={`nav-item ${activeMenu === "women" ? 'active' : ''} ${isBxIconClicked ? 'show' : ''}`}>
                    <Link to='/women'>women</Link>
                </span>
                <span
                    onClick={() => { setActiveMenu("kids") }}
                    className={`nav-item ${activeMenu === "kids" ? 'active' : ''} ${isBxIconClicked ? 'show' : ''}`}>
                    <Link to='/kids'>kids</Link>
                </span>
            </nav>

            <div className="nav-login-cart">
                <Link to='/login' style={{ width: '120px' }} onClick={() => { setActiveMenu("") }}>
                    <button>Login</button>
                </Link>
                <div className="cart-icon" >
                    <Link to='/cart' onClick={() => { setActiveMenu("") }}>
                        <img src={cartIcon} alt="cart icon" />
                        <span>{cartCount}</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
