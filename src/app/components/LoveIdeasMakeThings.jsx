import React from 'react';
import styles from './LoveIdeasMakeThings.module.css'

export default function LoveIdeasMakeThings() {

    return (
        <div className={styles.container}>
            <div className={styles.text}>
                we love ideas.
            </div>
            <br />
            <hr className={styles.line}></hr>
            <div className={styles.text}>
                we make things.
            </div>
        </div>
    );
};

