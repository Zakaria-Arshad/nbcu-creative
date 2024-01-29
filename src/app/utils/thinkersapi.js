import React from 'react';
import styles from '../css-styles/ThinkersComponent.module.css';
import { parseDescriptionData } from './thinkersapi2';

export const parseThinkersData = (thinkersJSON) => {
    for (let i = 0; i < Object.keys(thinkersJSON).length; i++) {
        let key = Object.keys(thinkersJSON)[i];
        if (key === 'title') {
            const titleList = thinkersJSON[key].split('\r\n');
            const newList = [];
            for (let j = 0; j < titleList.length; j++) {
                newList.push(<div className={`${styles.title_1} ${styles.offScreen}`}>{titleList[j]}</div>);
            }
            thinkersJSON[key] = newList;
        }
        else if (key === 'subHeading') {
            const subHeadingList = thinkersJSON[key].split('\r\n');
            const newList = [];
            for (let j = 0; j < subHeadingList.length; j++) {
                newList.push(<div className={`${styles.subtitle_1} ${styles.offScreen}`}>{subHeadingList[j]}</div>);
            }
            thinkersJSON[key] = newList;
        }
        else if (key === 'homeDescription') {
            thinkersJSON[key] = parseDescriptionData(thinkersJSON[key]);
        }
        } 
        return thinkersJSON; 
    }
