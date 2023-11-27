
import React from 'react';
import styles from './EventfulComponent.module.css'

// src="https://d2mf4l4ba7pnlp.cloudfront.net/images/img2.png" for background
// src="https://d2mf4l4ba7pnlp.cloudfront.net/images/bluestripe2.png" for blue stripe
// make a full container for the background
// then put the components inside of it

// to add in the future: conditional rendering for certain components and a prop for rendering animation
export default function EventfulComponent() {
  // Your component code here
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <img className={styles.image} src="https://d2mf4l4ba7pnlp.cloudfront.net/images/img2.png"></img>
        <img className={styles.blue_stripe} src="https://d2mf4l4ba7pnlp.cloudfront.net/images/bluestripe2.png"></img>
      </div>
      <div className={styles.text_container}>
        <div className={styles.title_container}>
          <div className={styles.title_1}>
            we&rsquo;re
          </div>
          <div className={styles.title_2}>
            eventful
          </div>
        </div>
        <div className={styles.subtitle_container}>
          <div className={styles.subtitle}>
            visual experiences for our
          </div>
          <div className={styles.subtitle}>
            businesses and brands
          </div>
        </div>
      </div>
    </div>
  )
}
