import React from 'react';
import styles from '../css-styles/VideoImageComponent.module.css';

// Returns list of Videos and Images from Props
export default function VideoImageComponent({ props }) {
    return (
        <div className={styles.container}>
            {props.map((item, index) => (
                <React.Fragment key={index}>
                    {item}
                </React.Fragment>
            ))}
        </div>
    );
}
