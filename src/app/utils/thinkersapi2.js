import parse, { domToReact } from 'html-react-parser';
import React from 'react';
import styles from '../css-styles/WeHelpBusinessesGrow.module.css';

export const parseDescriptionData = (description) => {
  const newList = [];
  const htmlString = description;
  parse(htmlString, {
      replace: (domNode) => {
          if (domNode.type === 'tag') {
              if (domNode.name === 'p') {
                  newList.push(<p className={`${styles.text} ${styles.offScreen}`}>{domToReact(domNode.children)}</p>)
              }
          }
      }

  })
  return newList;
}