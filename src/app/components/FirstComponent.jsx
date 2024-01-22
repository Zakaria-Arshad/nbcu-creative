import { React } from "react";
import styles from "../css-styles/FirstComponent.module.css";

// First component on the home page
export default function FirstComponent( {apiData} ) {
  return (
    <div className={styles.container}>
      <div className={styles.message_container}>
        <>
          {apiData.slice(0, 5).map((text, index) => (
            <div className={styles.message} key={index}>
              {text}
            </div>
          ))}
        </>

        <div className={styles.motto}>
          {/* we&rsquo;re <span className={styles.break}>in-house.</span>{" "}
          <span className={styles.break}>and all in.</span> */}
          {apiData[5]}
        </div>
        <div className={styles.image_container}>
          <a href="#targetComponent" className={styles.link}>
            <img
              className={styles.image}
              src="https://d2mf4l4ba7pnlp.cloudfront.net/images/arrowdown.svg"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}
