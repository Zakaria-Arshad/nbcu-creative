"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "../css-styles/Footer.module.css";

// Footer component displayed on all pages
export default function Footer({ props }) {
  // Animation variants
  const variants = {
    offScreen: { y: 40, opacity: 0 },
    onScreen: { y: 0, opacity: 1, transition: { duration: 1.5 } },
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
          {props.footerTitle}
        </motion.div>
        <motion.div
          className={styles.subtitle_container}
          initial="offScreen"
          whileInView="onScreen"
          variants={variants}
        >
          {props.footerParagraph}
        </motion.div>
        <motion.div
          className={styles.details_container}
          initial="offScreen"
          whileInView="onScreen"
          variants={variants}
        >
          <br />
          {props.details}
        </motion.div>
        <motion.div
          className={styles.copyright_container}
          initial="offScreen"
          whileInView="onScreen"
          variants={variants}
        >
          {props.copyrightDetails}
        </motion.div>
      </div>
    </>
  );
}

