

'use client' // necessary to useState. client component instead of server component

import { React, useState } from 'react';
import Link from 'next/link';
import styles from './ConnectedComponent.module.css'
import { motion } from 'framer-motion';

// src="https://d2mf4l4ba7pnlp.cloudfront.net/images/img4.png" for background
// src="https://d2mf4l4ba7pnlp.cloudfront.net/images/bluestripe2.png" for blue stripe
// make a full container for the background
// then put the components inside of it

// to add in the future: conditional rendering for certain components and a prop for rendering animation
export default function ConnectedComponent( {enable} ) {

  const allVariants = {
    offScreen: { y: 50, opacity: 0 },
    onScreen: { y: 0, opacity: 1, transition: { duration: .5 } }
  }

  return (
    <div className={styles.container}>
    <div className={styles.image_container}>
      <motion.img 
        className={styles.image} 
        initial={{ y: 50 }}
        whileInView={{ y: 0, transition: { duration: 0.5 } }}
        src="https://d2mf4l4ba7pnlp.cloudfront.net/images/img4.png">
      </motion.img>
      {enable === true ? (
        <img className={styles.blue_stripe} src="https://d2mf4l4ba7pnlp.cloudfront.net/images/bluestripe2.png"></img>
      ) : null}
        </div>
    <div className={styles.text_container}>
      <motion.div 
        className={styles.title_container}
        variants={allVariants}
        initial="offScreen"
        whileInView="onScreen"
      >
        <div className={styles.title_1}>
          we&rsquo;re
        </div>
        <div className={styles.title_2}>
          connected
        </div>
      </motion.div>
      <motion.div 
        className={styles.subtitle_container}
        variants={allVariants}
        initial="offScreen"
        whileInView="onScreen"
      >
        <div className={styles.subtitle_1}>
          we get employee engagement
        </div>
        <div className={styles.subtitle_2}>
          because, well, we&rsquo;re employees
        </div>
      </motion.div>
      <motion.div 
        className={styles.button_container}
        variants={allVariants}
        initial="offScreen"
        whileInView="onScreen"
      >
        {enable === true ? (
          <Link href="/connected">
          <div className={styles.view_button}>
            <img src="https://d2mf4l4ba7pnlp.cloudfront.net/images/viewit.svg"></img>
          </div>
          </Link>
        ) : null}
      </motion.div>
    </div>
  </div>
  )
}