import React from 'react';
import styles from './OurPartners.module.css'

export default function OurPartners() {

    return (
        <div className={styles.container}>
            <div className={styles.text}>
                our partners span
                <br />
                the company
            </div>
            <br />
            <hr className={styles.line}></hr>
            <div className={styles.text}>
                which makes us
                <br />
                look good
            </div>
            <br />
            <hr className={styles.line}></hr>
            <div className={styles.text}>
                so do lots of 
                <br />
                industry awards for
                <br />
                creative excellence
            </div>
        </div>
    );
};