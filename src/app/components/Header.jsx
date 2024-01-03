'use client'

import React, { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css';

// header should include thin orange bar, image on the left, and navbar icon on the right
export default function Header() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

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

    const parallelogramVariants = {
        hidden: {
          width: 0,
          opacity: 0,
          transition: { duration: 0.5 }
        },
        visible: (custom) => ({
          width: "100%", // Assuming the parallelograms take full width when visible
          opacity: 1,
          transition: { duration: custom * 0.2 }
        }),
        exit: (custom) => ({ // Define the exit variant
            width: 0, // Zip back to the left
            opacity: 0,
            transition: { duration: 0.3 * custom } 
          })
      };

    const menuItemVariants = {
        hidden: {
          opacity: 0,
          transition: { duration: 0.5 } 
        },
        visible: (custom) => ({
          opacity: 1, // Fully visible
          transition: { duration: custom * 0.3 } 
        }),
      };
      

    return (
        <div>
            <AnimatePresence>
            {menuVisible && <div className={styles.menu}>
                <div className={styles.parallelogram_container}>
                        {[1, 2, 3, 4, 5].map((index) => (
                        <motion.div
                            key={index}
                            className={styles[`parallelogram_${index}`]}
                            variants={parallelogramVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            custom={index} // Pass the index for staggered animation
                        />
                        ))}
                </div>
                <div className={styles.menu_container}>
                        {[1, 2, 3, 4, 5].map((index) => (
                        <motion.div
                            key={index}
                            className={styles[`menu_item_${index}`]}
                            variants={menuItemVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            custom={index}
                        >
                            {index === 1 && 'fresh baked'}
                            {index === 2 && "we're eventful"}
                            {index === 3 && "we're thinkers who do"}
                            {index === 4 && "we're connected"}
                            {index === 5 && "we're big fans"}
                        </motion.div>
                        ))}
                </div>
            </div>}
            </AnimatePresence>
            <motion.div 
                className={styles.fixed_bar}
                variants={barVariants}
                initial="hidden"
                animate="visible">
            </motion.div> {/*This is the orange bar*/}
            <div className={styles.fixed_container}>
            {!menuVisible && <Link href="/">
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
            </Link>}
                <motion.div 
                    className={styles.navbar_icon}
                    onClick={toggleMenu}
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
    )
}