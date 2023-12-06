'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './FirstComponent.module.css';
import Head from 'next/head';


export default function FirstComponent( {onImageClick} ) {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
      }, []); // scrolls to top on load/refresh

    const messageVariants = {
        hidden: { opacity: 0, y: 20 }, // start with opacity 0 (invisible) and 20px down
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: { delay: custom * 0.3, duration: .3 } // delay based on the index
        }),
    };

    const [isWideScreen, setIsWideScreen] = useState(true); // Assuming true by default

    useEffect(() => {
        // Function to update the state based on window width
        const checkScreenSize = () => setIsWideScreen(window.innerWidth >= 800);

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
        </Head>
        <div className={styles.container}>
            <div className={styles.message_container}>
                {isWideScreen && (
                    <>
                    {["we're obsessed. inspired. fun. connected.",
                      'builders. fans. solvers. social. friendly.',
                      'digital. humble. disruptive. tuned in.',
                      'ambitious. curious. not famous.',
                      'ambidextrous. strategic. partners.'].map((text, index) => (
                        <motion.div 
                            className={styles.message}
                            variants={messageVariants}
                            initial="hidden"
                            animate="visible"
                            custom={index} // passing index as custom prop for delay calculation
                            key={index}
                        >
                            {text}
                        </motion.div>
                    ))}
                </>
                )}
                <motion.div 
                    className={styles.motto}
                    variants={messageVariants}
                    initial="hidden"
                    animate="visible"
                    custom={isWideScreen ? 5 : 0}>
                    we&rsquo;re in-house. and all in.
                </motion.div>
                <div className={styles.image_container}>
                    <img className={styles.image} 
                        src="https://d2mf4l4ba7pnlp.cloudfront.net/images/arrowdown.svg"
                        onClick={onImageClick}></img>
                </div>
            </div>
        </div>
        </>
    );
}


