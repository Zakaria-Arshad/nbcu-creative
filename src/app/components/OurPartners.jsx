"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "../css-styles/OurPartners.module.css";

export default function OurPartners() {
  // Text animation variants
  const textVariants = {
    offScreen: { y: 50, opacity: 0 },
    onScreen: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  // Line animation variants
  const lineVariants = {
    offScreen: { width: "0%" },
    onScreen: { width: "35%", transition: { duration: 1 } },
  };

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.text}
        initial="offScreen"
        whileInView="onScreen"
        variants={textVariants}
      >
        our partners span
        <br />
        the company
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
        which makes us
        <br />
        look good
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
        so do lots of
        <br />
        industry awards for
        <br />
        creative excellence
      </motion.div>
    </div>
  );
}
