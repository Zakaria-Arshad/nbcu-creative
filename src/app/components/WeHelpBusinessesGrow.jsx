'use client'

import React from 'react';
import { motion } from 'framer-motion';
import styles from '../css-styles/WeHelpBusinessesGrow.module.css'
export default function WeHelpBusinessesGrow() {
    const textVariants = {
        offScreen: { y: 50, opacity: 0 },
        onScreen: { y: 0, opacity: 1, transition: {duration: 1} }
    };

    return (
        <div className={styles.container}>
                {["we help",
                'businesses grow',
                'and initiatives',
                'take off'].map((text, index) => (
                        <motion.div 
                            className={styles.text}
                            variants={textVariants}
                            initial="offScreen"
                            whileInView="onScreen"
                            key={index}
                        >
                            {text}
                        </motion.div>
                    ))}
        </div>
    );
};