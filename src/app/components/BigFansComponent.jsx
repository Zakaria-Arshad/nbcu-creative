"use client"; // necessary to useState. client component instead of server component

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../css-styles/BigFansComponent.module.css";

// Returns "We're Big Fans" component. Has enable prop to disable view button and blue stripe."
export default function BigFansComponent({ props, enable }) {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  // useEffect for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.onScreen)
          } else {
            entry.target.classList.remove(styles.onScreen)
          }
        }) 
      }, { threshold: 0.2 }
    )

    const imageElements = imageRef.current.querySelectorAll(`.${styles.image}, .${styles.blue_stripe}`)
    const textElements = textRef.current.querySelectorAll(`.${styles.title_1}, .${styles.subtitle_1}, .${styles.view_button}`)
    imageElements.forEach((el) => observer.observe(el))
    textElements.forEach((el) => observer.observe(el)) 
    return () => {
      imageElements.forEach((el) => observer.unobserve(el))
      textElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div id="targetComponent" className={styles.container}>
      <div className={styles.image_container} ref={imageRef}>
        <img
          className={`${styles.image} ${styles.offScreen}`}
          src={props.image.url}
        ></img>
        {enable === true ? (
          <img
            className={`${styles.blue_stripe} ${styles.offScreen}`}
            src="https://d2mf4l4ba7pnlp.cloudfront.net/images/bluestripe.png"
          ></img>
        ) : null}
      </div>
      <div className={styles.text_container} ref={textRef}>
        <div className={styles.title_container}>
          {props.title}
        </div>
        <div className={styles.subtitle_container}>
          {props.subHeading}
        </div>
        <div className={styles.button_container}>
          {enable === true ? (
            <Link href="/were-big-fans">
              <div className={`${styles.view_button} ${styles.offScreen}`}>
                <img src="https://d2mf4l4ba7pnlp.cloudfront.net/images/viewit.svg"></img>
              </div>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}

