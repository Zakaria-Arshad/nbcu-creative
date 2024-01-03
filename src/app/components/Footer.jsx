'use client'

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';

export default function Footer() {
    // Animation variants
    const variants = {
        offScreen: { y: 40, opacity: 0 },
        onScreen: { y: 0, opacity: 1, transition: { duration: 1.5 } }
    };

    return (
        <>
            <div className={styles.diagonal_piece}></div>
            <div className={styles.container}>
                <motion.div 
                    className={styles.title_container}
                    initial="offScreen"
                    whileInView="onScreen"
                    variants={variants}
                >
                    <div className={styles.title_1}>
                        NBCU is in
                    </div>
                    <div className={styles.title_2}>
                        our DNA.
                    </div>
                </motion.div>
                <motion.div 
                    className={styles.subtitle_container}
                    initial="offScreen"
                    whileInView="onScreen"
                    variants={variants}
                >
                    <p className={styles.subtitle}> 
                        We know the players. We get the culture. We know which elevators to take.
                    </p>
                    <p className={styles.subtitle}> 
                        You&apos;ll collaborate with a global mashup of thinkers and doers — from Chile to Sweden; from South Korea to South Africa. And, yes, even Long Island.
                    </p>
                    <p className={styles.subtitle}> 
                        We do digital, off-air collateral, brand identity, launches, branded experiences, campaigns, key art, OOH, B2B, B2C, B2E. Full service from start to finish.
                    </p>
                    <p className={styles.subtitle}> 
                        You&apos;ve probably seen our work but didn&apos;t know it was us. Now you&apos;re like &quot;Oh, you guys did that?&quot;
                    </p>
                </motion.div>
                <motion.div 
                    className={styles.details_container}
                    initial="offScreen"
                    whileInView="onScreen"
                    variants={variants}
                >
                    <p className={styles.details}>
                        Hit up Nicole for all the deets:<br/>
                        516-672-3105 | nicole.siegel@nbcuni.com <br/>
                        30 Rockefeller Plaza, New York, NY 10112
                    </p>
                </motion.div>
                <motion.div 
                    className={styles.copyright_container}
                    initial="offScreen"
                    whileInView="onScreen"
                    variants={variants}
                >
                    <p className={styles.copyright}>
                        ©2022 NBCUniversal Creative Group | Terms of use | Privacy Policy | Do not sell my personal information | CA Notice
                    </p>
                </motion.div>
            </div>
        </>
    );
}

