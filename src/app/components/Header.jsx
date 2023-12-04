'use client'

import React from "react"
import Head from "next/head";
import { motion } from "framer-motion"
import styles from './Header.module.css';

// header should include thin orange bar, image on the left, and navbar icon on the right
export default function Header() {
    const barVariants = {
        hidden : { opacity: 0, y: -20},
        visible : { opacity: 1, 
                    y: 0,
                    transition: { 
                        delay: 0, 
                        duration: .3, // Increase duration to slow down the animation
                    }},
    }

    const iconVariants = {
        hidden: { opacity: 0 },
        visible: (custom) => (
            { opacity: 1,
                transition: { delay: custom * 0.3, duration: .3 }}),
        hover: {
            filter: 'brightness(0) saturate(100%) invert(37%) sepia(100%) saturate(4250%) hue-rotate(14deg) brightness(102%) contrast(101%)',
            }
    }

    return (
        <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div>
            <motion.div 
                className={styles.fixed_bar}
                variants={barVariants}
                initial="hidden"
                animate="visible">
            </motion.div> {/*This is the orange bar*/}
            <div className={styles.fixed_container}>
                <motion.img 
                    className={styles.nbcu_logo} 
                    src="https://d2mf4l4ba7pnlp.cloudfront.net/images/verticallogo.svg"
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover='hover'
                    custom={1}
                    >
                </motion.img>
                <motion.div 
                    className={styles.navbar_icon}
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover='hover'
                    custom={2}> {/*This is the navbar icon*/}
                    <span className={styles.menu_line}></span>
                    <span className={styles.menu_line}></span>
                    <span className={styles.menu_line}></span>
                </motion.div> 
            </div>
        </div>
        </>
            
    )
}