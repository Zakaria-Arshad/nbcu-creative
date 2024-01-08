"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "../css-styles/FeaturedComponent.module.css";

// Returns a grid of images, two in each row (by default) with overlay text on hover
// Takes in an array of images and titles to display
export default function FeaturedComponent({ images, titles }) {
  return (
    <div className={styles.container}>
      {images.map((image, index) => (
        <motion.div
          className={styles.box}
          key={index}
          initial={{ y: 50 }}
          whileInView={{ y: 0, transition: { duration: 0.7 } }}
        >
          <img className={styles.image} src={image}></img>
          <div className={styles.overlay}>
            <div className={styles.overlay_content}>{titles[index]}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
