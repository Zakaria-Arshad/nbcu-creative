import React from "react"
import Head from "next/head";
import styles from './Header.module.css';

// header should include thin orange bar, image on the left, and navbar icon on the right
export default function Header() {
    return (
        <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div>
            <div className={styles.fixed_bar}>
                <div className={styles.fixed_orange_bar}></div> {/*This is the orange bar*/}
            </div>
            <div className={styles.fixed_container}>
                <img className={styles.nbcu_logo} src="https://d2mf4l4ba7pnlp.cloudfront.net/images/verticallogo.svg"></img>
                <div className={styles.navbar_icon}> {/*This is the navbar icon*/}
                    <span className={styles.menu_line}></span>
                    <span className={styles.menu_line}></span>
                    <span className={styles.menu_line}></span>
                </div> 
            </div>
        </div>
        </>
            
    )
}