import React from 'react';
import styles from '../css-styles/VideoAudioComponent.module.css';

export const parseImageandVideoData = (imageVideoJSONList) => {
  let res = [];
  imageVideoJSONList.forEach(item => {
    if (item.type === 'Video' && item.Video) {
      item.Video.forEach(video => {
        if (video.url) { // Assuming this is the correct property based on previous discussion
          // Directly push React component for each video
          res.push(
            <iframe 
              src={video.url} 
              className={styles.item} 
              allowFullScreen 
              key={res.length} // Using the current length of res as a key
            />
          );
        }
      });
    } else if (item.type === 'Image' && item.Image) {
      item.Image.forEach(image => {
        if (image.url) {
          // Directly push React component for each image
          res.push(
            <img 
              src={image.url} 
              className={styles.item} 
              alt="" 
              key={res.length} // Using the current length of res as a key
            />
          );
        }
      });
    }
  });
  return res;
};

