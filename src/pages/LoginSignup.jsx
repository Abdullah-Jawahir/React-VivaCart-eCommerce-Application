import React, { useState } from 'react'
import './css/LoginSignup.css'

export const LoginSignup = () => {

    const [isUser, setIsUser] = useState(false)

    const confirmUser = () => {
        setIsUser(prevUser => !prevUser)
    }


    return (
        <div className='login-signup'>
            <form className='login-signup-form'>
                <h3>{isUser ? 'Login' : 'Sign Up'}</h3>
                <div className={`form-inputs ${isUser ? 'hide-username' : ''}`}>
                    <input type="text" name="username" id="username" placeholder='Your Name' />
                    <input type="email" name="usermail" id="usermail" placeholder='Email Address' />
                    <input type="password" name="user-pw" id="user-pw" placeholder='Password' />
                </div>
                <button type='submit'>{isUser ? 'Continue' : 'Sign Up'}</button>
                <p className='click-text'>{isUser ? 'Create' : 'Already have'} an account? <span onClick={confirmUser}>{isUser ? 'Click' : 'Login'} here</span></p>
                <div className="terms">
                    <input type="checkbox" name="user-agree" id="user-agree" />
                    <p>By Continuing, I agree to the terms and conditions.</p>
                </div>
            </form>
        </div>
    )
}
