import React from 'react';
import styles from '../css-styles/Related.module.css';
import Link from 'next/link';

// Menu for dynamic pages on navigating between pages
export default function Related( {props} ) {
    return (
        <div className={styles.outside_container}>
        <div className={styles.container}>
            <div className={styles.text_container}>
                <Link href={`/featured/${props.related.prev.alias}`}>
                    ← PREVIOUS
                </Link>
                <Link href={`/featured/${props.related.next.alias}`}>
                    <div>NEXT →</div>
                </Link>
            </div>
            <div className={styles.related_container}>
                <div className={styles.box}>
                    <Link href={`/featured/${props.related.prev.alias}`}>
                        <img className={styles.image} src={props.related.prev.image.url}></img>
                        <div className={styles.overlay}>
                        <div className={styles.overlay_content}>{props.related.prev.title}</div>
                        </div>
                    </Link>
                </div>
                <div className={styles.box}>
                    <Link href={`/featured/${props.related.next.alias}`}>
                        <img className={styles.image} src={props.related.next.image.url}></img>
                        <div className={styles.overlay}>
                        <div className={styles.overlay_content}>{props.related.next.title}</div>
                        </div>
                    </Link>
                </div>
                
            </div>
        </div>
        <div className={styles.return}>
            <Link href={`${props.returnto.alias}`}>RETURN TO {props.returnto.title.toUpperCase()}</Link>
        </div> 
        </div>  
    )

}