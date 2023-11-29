
'use client' // necessary to useState. client component instead of server component

import { React, useState } from 'react';
import styles from './ThinkersComponent.module.css'

// src="https://d2mf4l4ba7pnlp.cloudfront.net/images/img3.png" for background
// src="src="https://d2mf4l4ba7pnlp.cloudfront.net/images/bluestripe.png"" for blue stripe
// make a full container for the background
// then put the components inside of it

// to add in the future: conditional rendering for certain components and a prop for rendering animation
export default function ThinkersComponent() {
  const [enable, setEnable] = useState(false) 

  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <img className={styles.image} src="https://d2mf4l4ba7pnlp.cloudfront.net/images/img3.png"></img>
        <img className={styles.blue_stripe} src="https://d2mf4l4ba7pnlp.cloudfront.net/images/bluestripe.png"></img>
      </div>
      <div className={styles.text_container}>
        <div className={styles.title_container}>
          <div className={styles.title_1}>
            we&rsquo;re
          </div>
          <div className={styles.title_2}>
            thinkers
          </div>
          <div className={styles.title_3}>
            who do
          </div>
        </div>
        <div className={styles.subtitle_container}>
          <div className={styles.subtitle_1}>
            building brand identity
          </div>
          <div className={styles.subtitle_2}>
            from concept to launch
          </div>
        </div>
        <div className={styles.button_container}>
          {!enable ? <div className={styles.view_button}>
            <img src="https://d2mf4l4ba7pnlp.cloudfront.net/images/viewit.svg"></img>
          </div> : null}
        </div>
      </div>
    </div>
  )
}