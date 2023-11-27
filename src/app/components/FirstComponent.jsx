
import React from 'react';
import styles from './FirstComponent.module.css'

export default function FirstComponent() {
    return (
        <div className={styles.container}>
            <div className = {styles.message_container}>
                <div className={styles.message}>
                    we&rsquo;re obsessed. inspired. fun. connected.
                </div>
                <div className={styles.message}>
                    builders. fans. solvers. social. friendly.
                </div>
                <div className={styles.message}>
                    digital. humble. disruptive. tuned in.
                </div>
                <div className={styles.message}>
                    ambitious. curious. not famous.
                </div>
                <div className={styles.message}>
                    ambidextrous. strategic. partners.
                </div>
                <div className={styles.motto}>
                    we&rsquo;re in-house. and all in.
                </div>
                <div className={styles.image_container}>
                    <img className={styles.image} src="https://d2mf4l4ba7pnlp.cloudfront.net/images/arrowdown.svg"></img>
                </div>
            </div>
        </div>
    )
}
