"use client";
import React from "react";
import styles from "../css-styles/FreshBakedComponent.module.css";
import { motion } from "framer-motion";

// "Fresh Baked" component, used in Fresh Baked subpage.
export default function FreshBakedComponent() {
  
  // Variants for text animation
  const allVariants = {
    offScreen: { y: 50, opacity: 0 },
    onScreen: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <motion.img
          initial={{ y: 50 }}
          whileInView={{ y: 0, transition: { duration: 0.5 } }}
          src="https://d2mf4l4ba7pnlp.cloudfront.net/images/img5.png"
          className={styles.image}
        ></motion.img>
      </div>
      <div className={styles.text_container}>
        <motion.div
          className={styles.title_container}
          variants={allVariants}
          initial="offScreen"
          whileInView="onScreen"
        >
          <div className={styles.title}>fresh baked</div>
        </motion.div>
        <motion.div
          className={styles.subtitle_container}
          variants={allVariants}
          initial="offScreen"
          whileInView="onScreen"
        >
          <div className={styles.subtitle_1}>what&rsquo;s new and trending</div>
          <div className={styles.subtitle_2}>here at the shop</div>
        </motion.div>
      </div>
    </div>
  );
}
