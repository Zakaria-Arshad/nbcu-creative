import styles from '../css-styles/EventfulComponent.module.css';
import React from 'react';
import { parseDescriptionData } from './eventfulapi2';

export const parseData = (eventfulJSON) => {
    for (let i = 0; i < Object.keys(eventfulJSON).length; i++) {
        let key = Object.keys(eventfulJSON)[i];
        if (key === 'title') {
            const titleList = eventfulJSON[key].split('\r\n');
            const newList = [];
            for (let j = 0; j < titleList.length; j++) {
                newList.push(<div className={styles.title_1}>{titleList[j]}</div>);
            }
            eventfulJSON[key] = newList;
        }
        else if (key === 'subHeading') {
            const subHeadingList = eventfulJSON[key].split('\r\n');
            const newList = [];
            for (let j = 0; j < subHeadingList.length; j++) {
                newList.push(<div className={styles.subtitle_1}>{subHeadingList[j]}</div>);
            }
            eventfulJSON[key] = newList;
        }
        else if (key === 'homeDescription') {
            eventfulJSON[key] = parseDescriptionData(eventfulJSON[key]);
        }
        } 
        return eventfulJSON; 
    }
