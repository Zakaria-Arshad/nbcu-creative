"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "../css-styles/FeaturedComponent.module.css";

// Returns a grid of images, two in each row (by default) with overlay text on hover
// Takes in an array of images and titles to display
export default function FeaturedComponent({ props }) {
  return (
    <div className={styles.container}>
      {props.map((prop, index) => (
        <motion.div
          className={styles.box}
          key={index}
          initial={{ y: 50 }}
          whileInView={{ y: 0, transition: { duration: 0.7 } }}
        >
          <img className={styles.image} src={prop[0]}></img>
          <div className={styles.overlay}>
            <div className={styles.overlay_content}>{prop[1]}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
