import React from 'react';
import styles from '../css-styles/VideoImageComponent.module.css';

export const parseImageandVideoData = (imageVideoJSONList) => {
  let res = [];
  imageVideoJSONList.forEach(item => {
    if (item.type === 'Video' && item.Video) {
      item.Video.forEach(video => {
        if (video.url) { 
          // Directly push React component for each video
          res.push(
            <iframe 
              src={video.url} 
              className={styles.item} 
              allowFullScreen 
              style={{aspectRatio: 16 / 9}} 
              key={res.length} // Using the current length of res as a key
            />
          );
        }
      });
    } else if (item.type === 'Image' && item.Image) {
      item.Image.forEach(image => {
        if (image.url) {
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

