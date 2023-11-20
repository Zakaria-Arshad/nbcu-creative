import React from "react"
import styles from './Header.module.css';

// header should include thin orange bar, image on the left, and navbar icon on the right
export default function Header() {
    return (
        <div>
            <div className={styles.fixed_orange_bar}></div> {/*This is the orange bar*/}
            <div className={styles.fixed_container}>
                <img className={styles.nbcu_logo} src="https://d2mf4l4ba7pnlp.cloudfront.net/images/verticallogo.svg"></img>
                <div className={styles.navbar_icon}>
                    <span className={styles.menu_line}></span>
                    <span className={styles.menu_line}></span>
                    <span className={styles.menu_line}></span>
                </div> {/*This is the navbar icon*/}
            </div>
        </div>
            
    )
}