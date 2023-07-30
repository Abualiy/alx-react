import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import './Header.css';

function Header() {
    return (
        <>
            <img src={logo} className="Hoblerton-logo" alt="Hoblerton-logo" />
            <h1>School dashboard</h1>
        </>
    );
}

export default Header;