import React from 'react';
import styles from "./login.module.css"

const Login = (props) => {
    return (
    <div className={styles.container}>
        <div className={styles.header}>
            <img className={styles.img} src="/images/logo.png" alt="Logo"/>
            <h3 className={styles.header_font}>Business Card Maker</h3>
        </div>
        <div className={styles.content}>
            <h3 className={styles.content_h3}>Login</h3>
            <button>Google</button>
            <button>Github</button>
            <button>Phone Number</button>
        </div>
        <div className={styles.bottom}>
            <p className={styles.bottom_p}>Code your Dream</p>
        </div>
    </div>
    )
}

export default Login;