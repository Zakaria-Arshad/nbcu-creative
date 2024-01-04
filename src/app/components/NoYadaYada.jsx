'use client'
import React from 'react';
import { motion } from 'framer-motion';
import styles from '../css-styles/NoYadaYada.module.css'

export default function NoYadaYada() {
    // Text animation variants
    const textVariants = {
        offScreen: { y: 50, opacity: 0 },
        onScreen: { y: 0, opacity: 1, transition: { duration: 1 } }
    };

    // Line animation variants
    const lineVariants = {
        offScreen: { width: '0%' },
        onScreen: { width: '35%', transition: { duration: 1 } }
    };

    return (
        <div className={styles.container}>
            <motion.div 
                className={styles.text}
                initial="offScreen"
                whileInView="onScreen"
                variants={textVariants}
            >
                no yada-yada
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
                no ego trips
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
                no divas
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
                sound good to you?
            </motion.div>
        </div>
    );
};
