"use client";
import React, { useRef, useEffect } from "react";
import styles from "../css-styles/NoYadaYada.module.css";

// "No Yada-Yada" component, used on Home Page.
export default function NoYadaYada( {props} ) {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.onScreen);
          } else {
            entry.target.classList.remove(styles.onScreen);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Apply the observer to the children elements
    const elements = containerRef.current.querySelectorAll(`.${styles.text}, .${styles.line}`);
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      {props.map((prop, index) => (
        <React.Fragment key={index}>
          {prop}
        </React.Fragment>
      ))}
    </div>
  );
}