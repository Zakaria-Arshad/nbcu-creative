import parse, { domToReact } from 'html-react-parser';
import React from 'react';
import styles from '../css-styles/LoveIdeasMakeThings.module.css';

export const parseDescriptionData = (description) => {
  const newList = [];
  const htmlString = description;
  parse(htmlString, {
      replace: (domNode) => {
          if (domNode.type === 'tag') {
              if (domNode.name === 'p') {
                  newList.push(<p className={`${styles.text} ${styles.offScreen}`}>{domToReact(domNode.children)}</p>)
              } else if (domNode.name === 'hr') {
                  newList.push(<hr className={`${styles.line} ${styles.offScreen}`} />)
              }

          }
      }

  })
  return newList;
}

