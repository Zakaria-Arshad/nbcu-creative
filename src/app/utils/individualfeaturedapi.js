import parse, { domToReact } from 'html-react-parser';
import React from 'react';
import styles from '../css-styles/IndividualFeaturedComponent.module.css';

export const parseIndividualFeatured = (featuredJSON) => {
    featuredJSON['description'] = parse(featuredJSON['description'], {
        replace: (domNode) => {
            return domNode;
        }
    });

    featuredJSON['partners'] = parse(featuredJSON['partners'], {
        replace: (domNode) => {
            return <p className={styles.partners}>{domToReact(domNode.children)}</p>;
        }
    });

    featuredJSON['assetsCreated'] = parse(featuredJSON['assetsCreated'], {
        replace: (domNode) => {
            return <p className={styles.assets_created}>{domToReact(domNode.children)}</p>;
        }
    });

    return featuredJSON
}