import React from 'react';
import styles from '../css-styles/ThinkersComponent.module.css';
import styles_2 from '../css-styles/WeHelpBusinessesGrow.module.css';
import parse, { domToReact } from 'html-react-parser';

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
    
const parseDescriptionData = (description) => {
    const newList = [];
    const htmlString = description;
    parse(htmlString, {
        replace: (domNode) => {
            if (domNode.type === 'tag') {
                if (domNode.name === 'p') {
                    newList.push(<p className={`${styles_2.text} ${styles_2.offScreen}`}>{domToReact(domNode.children)}</p>)
                }
            }
        }

    })
    return newList;
}