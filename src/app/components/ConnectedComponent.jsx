"use client"; // necessary for framer motion. client component instead of server component

import { React } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../css-styles/ConnectedComponent.module.css";

// Returns "We're Connected" component. Has enable prop to disable view button and blue stripe.
export default function ConnectedComponent({ enable }) {
  // Text animation variants
  const allVariants = {
    offScreen: { y: 50, opacity: 0 },
    onScreen: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <motion.img
          className={styles.image}
          initial={{ y: 50 }}
          whileInView={{ y: 0, transition: { duration: 0.5 } }}
          src="https://d2mf4l4ba7pnlp.cloudfront.net/images/img4.png"
        ></motion.img>
        {enable === true ? (
          <img
            className={styles.blue_stripe}
            src="https://d2mf4l4ba7pnlp.cloudfront.net/images/bluestripe2.png"
          ></img>
        ) : null}
      </div>
      <div className={styles.text_container}>
        <motion.div
          className={styles.title_container}
          variants={allVariants}
          initial="offScreen"
          whileInView="onScreen"
        >
          <div className={styles.title_1}>we&rsquo;re</div>
          <div className={styles.title_2}>connected</div>
        </motion.div>
        <motion.div
          className={styles.subtitle_container}
          variants={allVariants}
          initial="offScreen"
          whileInView="onScreen"
        >
          <div className={styles.subtitle_1}>we get employee engagement</div>
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
  );
}
