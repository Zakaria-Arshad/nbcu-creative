'use client'

import React, { useState, useEffect } from 'react';
import styles from './FirstComponent.module.css';
import Head from 'next/head';


export default function FirstComponent() {
    const [isWideScreen, setIsWideScreen] = useState(true); // Assuming true by default

    useEffect(() => {
        // Function to update the state based on window width
        const checkScreenSize = () => setIsWideScreen(window.innerWidth >= 600);

        // Set the initial state based on the current window width
        checkScreenSize();

        // Add event listener for window resize
        window.addEventListener('resize', checkScreenSize);

        // Clean up event listener
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* other head elements */}
        </Head>
        <div className={styles.container}>
            <div className={styles.message_container}>
                {isWideScreen && (
                    <>
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
                    </>
                )}
                <div className={styles.motto}>
                    we&rsquo;re in-house. and all in.
                </div>
                <div className={styles.image_container}>
                    <img className={styles.image} src="https://d2mf4l4ba7pnlp.cloudfront.net/images/arrowdown.svg"></img>
                </div>
            </div>
        </div>
        </>
    );
}


