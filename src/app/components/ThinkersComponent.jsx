"use client"; // necessary to useState. client component instead of server component

import { React } from "react";
import Link from "next/link";
import styles from "../css-styles/ThinkersComponent.module.css";
import { motion } from "framer-motion";

// Returns "We're Thinkers" component. Has enable prop to disable view button and blue stripe.
export default function ThinkersComponent({ enable }) {
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
          src="https://d2mf4l4ba7pnlp.cloudfront.net/images/img3.png"
        ></motion.img>
        {enable === true ? (
          <img
            className={styles.blue_stripe}
            src="https://d2mf4l4ba7pnlp.cloudfront.net/images/bluestripe.png"
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
          <div className={styles.title_2}>thinkers</div>
          <div className={styles.title_3}>who do</div>
        </motion.div>
        <motion.div
          className={styles.subtitle_container}
          variants={allVariants}
          initial="offScreen"
          whileInView="onScreen"
        >
          <div className={styles.subtitle_1}>building brand identity</div>
          <div className={styles.subtitle_2}>from concept to launch</div>
        </motion.div>
        <motion.div
          className={styles.button_container}
          variants={allVariants}
          initial="offScreen"
          whileInView="onScreen"
        >
          {enable === true ? (
            <Link href="/thinkers">
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
