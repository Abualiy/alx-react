import React from 'react';
import logo from '../assets/holberton-logo.jpg';
// import './Header.css';
import { StyleSheet, css } from 'aphrodite';

function Header() {
    return (
        <div className={css(styles.header)}>
            <img className={css(styles.img)} src={logo} alt="Hoblerton-logo" />
            <h1>School dashboard</h1>
        </div>
    );
}

const styles = StyleSheet.create({
    header: {
        fontSize: '1.4rem',
        color: '#e0354b',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '3px solid #e0354b'
    },
    img: {
        width: '200px',
        height: '200px'
    }
})

export default Header;