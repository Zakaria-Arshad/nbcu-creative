import parse, { domToReact } from 'html-react-parser';
import styles from '../css-styles/FirstComponent.module.css'
import React from 'react';

// export const convertHeaderToTextArray = (htmlString) => {
//     const textArray = [];

//     parse(htmlString, {
//         replace: (domNode) => {
//             if (domNode.type === 'tag' && domNode.children && domNode.children.length){
//                 domNode.children.forEach(child => {
//                     if (child.type === 'text') {
//                         textArray.push(child.data);
//                     } 
//                 })
//             }
//         }
//     })

//     return textArray;
// }

export const convertHeaderHTMLToReact = (htmlString) => {
  return parse(htmlString, {
    replace: (domNode) => {
      // Check if the node is an element (not text, comment, etc.)
      if (domNode.type === 'tag') {
        // Apply different classes based on the class of the original HTML element
        if (domNode.attribs.class === 'home-copy-bold') {
          return (
            <div className={styles.motto}>
              {domToReact(domNode.children)}
            </div>
          );
        } else {
          // For elements without the specific class, use a default class
          return (
            
            <div className={styles.message}>
              {domToReact(domNode.children)}
            </div>
          );
        }
      }
    }
  });
};

export const parseFooter = (htmlString) => {
    const resultsArray = [];
  
    parse(htmlString, {
      replace: (domNode) => {
        if (domNode.type === 'text' && domNode.data.trim() !== '|'){
          // Add the text of this node to the array
          resultsArray.push(domNode.data.trim());
        } else if (domNode.type === 'tag' && domNode.name === 'a') {
          // If it's an anchor tag, add the href attribute to the array
          const href = domNode.attribs.href;
          resultsArray.push(`${href}`)
        }
      }
    });
  
    return resultsArray;
  };