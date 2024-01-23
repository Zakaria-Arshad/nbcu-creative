import parse from 'html-react-parser';
import styles from '../css-styles/Footer.module.css';
import React from 'react';

export const convertHeaderToTextArray = (htmlString) => {
    const textArray = [];

    parse(htmlString, {
        replace: (domNode) => {
            if (domNode.type === 'tag' && domNode.children && domNode.children.length){
                domNode.children.forEach(child => {
                    if (child.type === 'text') {
                        textArray.push(child.data);
                    } 
                })
            }
        }
    })

    return textArray;
}

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
          const text = domNode.children.length > 0 ? domNode.children[0].data : '';
          resultsArray.push(`${href}`)
        }
      }
    });
  
    return resultsArray;
  };