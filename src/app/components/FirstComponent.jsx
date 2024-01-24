import { React } from "react";
import styles from "../css-styles/FirstComponent.module.css";

// First component on the home page
export default function FirstComponent( { props }  ) {
  return (
    <div className={styles.container}>
      <div className={styles.message_container}>
        {props}
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
