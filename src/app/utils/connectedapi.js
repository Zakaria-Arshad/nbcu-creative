import styles from '../css-styles/ConnectedComponent.module.css';
import styles_2 from '../css-styles/OurPartners.module.css'
import parse, { domToReact } from 'html-react-parser';
import React from 'react';

export const parseConnectedData = (connectedJSON) => {
    for (let i = 0; i < Object.keys(connectedJSON).length; i++) {
        let key = Object.keys(connectedJSON)[i];
        if (key === 'title') {
            const titleList = connectedJSON[key].split('\r\n');
            const newList = [];
            for (let j = 0; j < titleList.length; j++) {
                newList.push(<div className={`${styles.title_1} ${styles.offScreen}`}>{titleList[j]}</div>);
            }
            connectedJSON[key] = newList;
        }
        else if (key === 'subHeading') {
            const subHeadingList = connectedJSON[key].split('\r\n');
            const newList = [];
            for (let j = 0; j < subHeadingList.length; j++) {
                newList.push(<div className={`${styles.subtitle_1} ${styles.offScreen}`}>{subHeadingList[j]}</div>);
            }
            connectedJSON[key] = newList;
        }
        else if (key === 'homeDescription') {
            connectedJSON[key] = parseDescriptionData(connectedJSON[key]);
        }
        } 
        return connectedJSON; 
    }

const parseDescriptionData = (description) => {
    const newList = [];
    const htmlString = description;
    parse(htmlString, {
        replace: (domNode) => {
            if (domNode.type === 'tag') {
                if (domNode.name === 'p') {
                    newList.push(<p className={`${styles_2.text} ${styles_2.offScreen}`}>{domToReact(domNode.children)}</p>)
                } else if (domNode.name === 'hr') {
                    newList.push(<hr className={`${styles_2.line} ${styles_2.offScreen}`} />)
                }
    
            }
        }
    })
    return newList;
    }