import React from "react";
import { StyleSheet, css } from 'aphrodite';

function Login() {
    return (
        <>
            <p>Login to access the full dashboard</p>
            <div className={css(styles.modified)}>
                <div>
                    <label htmlFor="email" className="input-label">
                        Email:{" "}
                    </label>
                    <input type="email" id="email" name="email"></input>
                </div>
                <div>
                    <label htmlFor="password" className="input-label">
                        Password:{" "}
                    </label>
                    <input type="password" id="password" name="password"></input>
                </div>
                <button>OK</button>
            </div>
        </>

    );
}

const styles = StyleSheet.create ({
    modified: {
        display: 'flex'
    }
});

export default Login;