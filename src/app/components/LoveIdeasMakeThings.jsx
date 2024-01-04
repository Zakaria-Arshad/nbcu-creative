'use client'

import React from 'react';
import { motion } from 'framer-motion';
import styles from '../css-styles/LoveIdeasMakeThings.module.css'

export default function LoveIdeasMakeThings() {
    // Variants for text animation
    const textVariants = {
        offScreen: { y: 50, opacity: 0 },
        onScreen: { y: 0, opacity: 1, transition: {duration: 1} }
    };

    // Variants for line animation
    const lineVariants = {
        offScreen: { width: '0%' },
        onScreen: { width: '35%',  transition: { duration: 1 }}
    }

    return (
        <div className={styles.container}>
            <motion.div 
                className={styles.text}
                initial="offScreen"
                whileInView="onScreen"
                variants={textVariants}
            >
                we love ideas.
            </motion.div>
            <br />
            <motion.hr 
                className={styles.line}
                initial="offScreen"
                whileInView="onScreen"
                variants={lineVariants}
            />
            <motion.div 
                className={styles.text}
                initial="offScreen"
                whileInView="onScreen"
                variants={textVariants}
            >
                we make things.
            </motion.div>
        </div>
    );
};


