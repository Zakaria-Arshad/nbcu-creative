import parse, { domToReact } from 'html-react-parser';
import styles from '../css-styles/Footer.module.css';
import React from 'react';

export const convertFooterHTMLToReact = (htmlString) => {
    const footerTitle = [];
    const footerParagraph = [];
    const copyrightDetails = [];
    const details = [];

    parse(htmlString, {
        replace: (domNode) => {
            if (domNode.type === "tag") {
                if (domNode.attribs.class === "footerTitle") {
                    footerTitle.push(<div>{domToReact(domNode.children)}</div>);
                } 
                else if (domNode.attribs.class === "footerParagraph") {
                    if (domNode.children.length === 1 && domNode.children[0].type === 'text') {
                        // It's a single text node
                        footerParagraph.push(<p className={styles.subtitle}>{domNode.children[0].data}</p>);
                    } else {
                        // Handle multiple children or non-text single child
                        copyrightDetails.push(<p>{domToReact(domNode.children)}</p>);
                    }
                }
                else if (domNode.attribs.class === "footerContact footerParagraph") {
                    details.push(<div className={styles.details}>{domToReact(domNode.children)}<br /></div>);
                }
            }
        }
    });

    return { footerTitle, footerParagraph, copyrightDetails, details };
}
