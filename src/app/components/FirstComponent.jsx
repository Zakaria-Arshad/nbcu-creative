import { React } from 'react';
import styles from './FirstComponent.module.css';

export default function FirstComponent() {

    // const [isWideScreen, setIsWideScreen] = useState(true); // Assuming true by default

    // useEffect(() => {
    //     // Function to update the state based on window width
    //     const checkScreenSize = () => setIsWideScreen(window.innerWidth >= 950);

    //     // Set the initial state based on the current window width
    //     checkScreenSize();

    //     // Add event listener for window resize
    //     window.addEventListener('resize', checkScreenSize);

    //     // Clean up event listener
    //     return () => window.removeEventListener('resize', checkScreenSize);
    // }, []);

    return (
        <div className={styles.container}>
            <div className={styles.message_container}>
                
                    <>
                    {["we're obsessed. inspired. fun. connected.",
                      'builders. fans. solvers. social. friendly.',
                      'digital. humble. disruptive. tuned in.',
                      'ambitious. curious. not famous.',
                      'ambidextrous. strategic. partners.'].map((text, index) => (
                        <div
                            className={styles.message}
                        >
                            {text}
                        </div>
                    ))}
                </>
                
                <div 
                    className={styles.motto}
                    >
                    we&rsquo;re <span className={styles.break}>in-house</span> <span className={styles.break}>and all in.</span>
                </div>
                <div 
                    className={styles.image_container}
                    >
                    <a href="#targetComponent" className={styles.link}>
                        <img className={styles.image} 
                            src="https://d2mf4l4ba7pnlp.cloudfront.net/images/arrowdown.svg">
                        </img>
                    </a>
                </div>
            </div>
        </div>
    );
}


