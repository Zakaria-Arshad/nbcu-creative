import { React } from 'react';
import { motion } from 'framer-motion';
import styles from './FirstComponent.module.css';

export default function FirstComponent() {
    const allVariants = {
        hidden: { opacity: 0, y: 20 }, // start with opacity 0 (invisible) and 20px down
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: { delay: custom * 0.3, duration: .3 } // delay based on the index
        }),
    };

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
                        <motion.div 
                            className={styles.message}
                            variants={allVariants}
                            initial="hidden"
                            animate="visible"
                            custom={index} // passing index as custom prop for delay calculation
                            key={index}
                        >
                            {text}
                        </motion.div>
                    ))}
                </>
                
                <motion.div 
                    className={styles.motto}
                    variants={allVariants}
                    initial="hidden"
                    animate="visible"
                    custom={5}>
                    we&rsquo;re <span className={styles.break}>in-house</span> <span className={styles.break}>and all in.</span>
                </motion.div>
                <motion.div 
                    className={styles.image_container}
                    variants={allVariants}
                    initial="hidden"
                    animate="visible"
                    custom={6}
                    >
                    <a href="#targetComponent" className={styles.link}>
                        <img className={styles.image} 
                            src="https://d2mf4l4ba7pnlp.cloudfront.net/images/arrowdown.svg">
                        </img>
                    </a>
                </motion.div>
            </div>
        </div>
    );
}


