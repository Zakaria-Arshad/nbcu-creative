import styles from '../css-styles/EventfulComponent.module.css';
import styles_2 from '../css-styles/LoveIdeasMakeThings.module.css';
import parse, { domToReact } from 'html-react-parser';
import React from 'react';

export const parseEventfulData = (eventfulJSON) => {
    for (let i = 0; i < Object.keys(eventfulJSON).length; i++) {
        let key = Object.keys(eventfulJSON)[i];
        if (key === 'title') {
            const titleList = eventfulJSON[key].split('\r\n');
            const newList = [];
            for (let j = 0; j < titleList.length; j++) {
                newList.push(<div className={`${styles.title_1} ${styles.offScreen}`}>{titleList[j]}</div>);
            }
            eventfulJSON[key] = newList;
        }
        else if (key === 'subHeading') {
            const subHeadingList = eventfulJSON[key].split('\r\n');
            const newList = [];
            for (let j = 0; j < subHeadingList.length; j++) {
                newList.push(<div className={`${styles.subtitle_1} ${styles.offScreen}`}>{subHeadingList[j]}</div>);
            }
            eventfulJSON[key] = newList;
        }
        else if (key === 'homeDescription') {
            eventfulJSON[key] = parseDescriptionData(eventfulJSON[key]);
        }
        } 
        return eventfulJSON; 
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