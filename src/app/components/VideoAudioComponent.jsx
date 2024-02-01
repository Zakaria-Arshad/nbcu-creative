import React from 'react';
import styles from '../css-styles/VideoAudioComponent.module.css';

export default function VideoAudioComponent({ props }) {
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
