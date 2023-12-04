import React from 'react';
import styles from './Footer.module.css';
import Head from 'next/head';

export default function Footer() {
    return (
        <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* other head elements */}
        </Head>
        <div className={styles.diagonal_piece}></div>
        <div className={styles.container}>
            <div className={styles.title_container}>
                <div className={styles.title_1}>
                    NBCU is in
                </div>
                <div className={styles.title_2}>
                    our DNA.
                </div>
            </div>
            <div className={styles.subtitle_container}>
                <p className={styles.subtitle}> 
                    We know the players. We get the culture. We know which elevators to take.
                </p>
                <p className={styles.subtitle}> 
                    You'll collaborate with a global mashup of thinkers and doers — from Chile to Sweden; from South Korea to South Africa. And, yes, even Long Island.
                </p>
                <p className={styles.subtitle}> 
                    We do digital, off-air collateral, brand identity, launches, branded experiences, campaigns, key art, OOH, B2B, B2C, B2E. Full service from start to finish.
                </p>
                <p className={styles.subtitle}> 
                    You've probably seen our work but didn't know it was us. Now you're like “Oh, you guys did that?"
                </p>
            </div>
            <div className={styles.details_container}>
                <p className={styles.details}>Hit up Nicole for all the deets:<br/>
                                        516-672-3105 | nicole.siegel@nbcuni.com <br/>
                                        30 Rockefeller Plaza, New York, NY 10112
                </p>
            </div>
            <div className={styles.copyright_container}>
                <p className={styles.copyright}>©2022 NBCUniversal Creative Group | Terms of use | Privacy Policy | Do not sell my personal information | CA Notice</p>
            </div>
        </div>
        </>
    )

}
