
'use client' // necessary to useState. client component instead of server component

import { React, useState } from 'react';
import styles from './BigFansComponent.module.css'
import { motion } from 'framer-motion';

export default function BigFansComponent() {
  const [enable, setEnable] = useState(false) 

  const allVariants = {
    offScreen: { y: 50, opacity: 0 },
    onScreen: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  }

  return (
    <div className={styles.container}>
    <div className={styles.image_container}>
    <motion.img 
        className={styles.image} 
        initial={{ y: 50 }}
        whileInView={{ y: 0, transition: { duration: 0.5 } }}
        src="https://d2mf4l4ba7pnlp.cloudfront.net/images/blacklistheader.png">
    </motion.img>
      <img className={styles.blue_stripe} src="https://d2mf4l4ba7pnlp.cloudfront.net/images/bluestripe.png"></img>
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
          big fans
        </div>
      </motion.div>
      <motion.div 
        className={styles.subtitle_container}
        variants={allVariants}
        initial="offScreen"
        whileInView="onScreen"
      >
        <div className={styles.subtitle_1}>
          bringing our A-game to sports
        </div>
        <div className={styles.subtitle_2}>
          and entertainment brands
        </div>
      </motion.div>
      <motion.div 
        className={styles.button_container}
        variants={allVariants}
        initial="offScreen"
        whileInView="onScreen"
      >
        {!enable ? (
          <div className={styles.view_button}>
            <img src="https://d2mf4l4ba7pnlp.cloudfront.net/images/viewit.svg"></img>
          </div>
        ) : null}
      </motion.div>
    </div>
  </div>
  )
}