import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
// import './Footer.css';
import { StyleSheet, css } from 'aphrodite';

const style = StyleSheet.create({
    footer: {
        borderTop: '3px solid red',
        width: '100%',
        fontSize: '1rem',
        padding: '1.2rem',
        display: 'flex',
        justifyContent: 'center',
        fontStyle: 'italic'
    }
});

function Footer() {
    return (
        <div className={css(style.footer)}>
            <p> Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        </div>
    );
}

export default Footer;