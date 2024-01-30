import styles from '../css-styles/BigFansComponent.module.css';
import styles_2 from '../css-styles/NoYadaYada.module.css';
import parse, { domToReact } from 'html-react-parser';
import React from 'react';

export const parseBigFansData = (bigfansJSON) => {
    for (let i = 0; i < Object.keys(bigfansJSON).length; i++) {
        let key = Object.keys(bigfansJSON)[i];
        if (key === 'title') {
            const titleList = bigfansJSON[key].split('\r\n');
            const newList = [];
            for (let j = 0; j < titleList.length; j++) {
                newList.push(<div className={`${styles.title_1} ${styles.offScreen}`}>{titleList[j]}</div>);
            }
            bigfansJSON[key] = newList;
        }
        else if (key === 'subHeading') {
            const subHeadingList = bigfansJSON[key].split('\r\n');
            const newList = [];
            for (let j = 0; j < subHeadingList.length; j++) {
                newList.push(<div className={`${styles.subtitle_1} ${styles.offScreen}`}>{subHeadingList[j]}</div>);
            }
            bigfansJSON[key] = newList;
        }
        else if (key === 'homeDescription') {
            bigfansJSON[key] = parseDescriptionData(bigfansJSON[key]);
        }
        } 
        return bigfansJSON; 
    }

const parseDescriptionData = (description) => {
    const newList = [];
    const htmlString = description;
    parse(htmlString, {
        replace: (domNode) => {
        if (domNode.type === 'tag') {
            if (domNode.name === 'p') {
            // Convert text nodes to lowercase
            const lowerCaseChildren = domNode.children.map(child => {
                if (child.type === 'text') {
                return { ...child, data: child.data.toLowerCase() };
                }
                return child;
            });
            newList.push(
                <p className={`${styles_2.text} ${styles_2.offScreen}`}>
                {domToReact(lowerCaseChildren)}
                </p>
            );
            } else if (domNode.name === 'hr') {
            newList.push(
                <hr className={`${styles_2.line} ${styles_2.offScreen}`} />
            );
            }
        }
        }
    });
    return newList;
    };