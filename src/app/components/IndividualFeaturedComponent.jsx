import React from 'react';
import styles from '../css-styles/IndividualFeaturedComponent.module.css';

export default function IndividualFeaturedComponent( {props} ) {
    return (
        <div className={styles.container}>
            <div className={styles.title_container}>
                <h1 className={styles.title}>{props.title}</h1>
            </div>
            <div className={styles.text_container}> {/* stores row flexbox of text */}
                <div className={styles.description}>
                {props.description}
                </div>
                <div className={styles.partners}> {/* column flexbox of p tags */}
                    <strong>PARTNERS</strong>
                    {props.partners}
                </div>
                <div className={styles.assets_created}> {/* column flexbox of p tags */}
                    <strong>ASSETS CREATED</strong>
                    {props.assetsCreated}
                </div>
            </div>
        </div>
    )
    // Your code here
}
