"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "../css-styles/Footer.module.css";

// Footer component displayed on all pages
export default function Footer({ apiData }) {
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
          <div className={styles.title_1}>{apiData[0]}</div>
          <div className={styles.title_2}>{apiData[1]}</div>
        </motion.div>
        <motion.div
          className={styles.subtitle_container}
          initial="offScreen"
          whileInView="onScreen"
          variants={variants}
        >
          {apiData.slice(2, 6).map((item, index) => (
            <p key={index} className={styles.subtitle}>
              {item}
            </p>
          ))}
        </motion.div>
        <motion.div
          className={styles.details_container}
          initial="offScreen"
          whileInView="onScreen"
          variants={variants}
        >
          <p className={styles.details}>
            {apiData[6]}
            <br />
            {apiData[7]} <br />
            {apiData[8]}
          </p>
        </motion.div>
        <motion.div
          className={styles.copyright_container}
          initial="offScreen"
          whileInView="onScreen"
          variants={variants}
        >
          <p className={styles.copyright}>
            {apiData[9]} 
            <a href={apiData[10]} target="_blank"> {apiData[11]} </a> | 
            <a href={apiData[12]} target="_blank"> {apiData[13]} </a> |
            <a href={apiData[14]} target="_blank"> {apiData[15]} </a> | 
            <a href={apiData[16]} target="_blank"> {apiData[17]} </a>
          </p>
        </motion.div>
      </div>
    </>
  );
}

