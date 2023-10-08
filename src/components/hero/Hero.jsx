import React from 'react';
import styles from "./Hero.module.scss";
import { motion } from "framer-motion"
import { fadeIn, slideIn, staggerContainer } from '../../utils/motion';

const Hero = () => {
    return (
        <section className={`paddings ${styles.wrapper}`}>
            <motion.div 
                initial="hidden"
                whileInView="show"
                variants={staggerContainer}
                viewport={{once: false , amount : 0.25}}
                className={`innerWidth ${styles.container}`}
            >

                {/* Upper Element */}
                <div className={`${styles.upperElements}`}>
                    <motion.span 
                        variants={fadeIn("right","tween",0.2,1)}
                        className="primaryText"
                    >
                        Hey There, <br /> I'm Binjan.
                    </motion.span>
                    <motion.span 
                        variants={fadeIn("left","tween",0.4,1)}
                        className='secondaryText'
                    >
                        I design beautiful simple
                        <br />
                        things, And I love what i do
                    </motion.span>
                </div>

                {/* person image */}
                <motion.div 
                    variants={fadeIn("up","tween",0.3,1)}
                    className={styles.person}
                >
                    <motion.img
                        variants={slideIn("up","tween",0.5,1)}
                        src="/person.png" 
                    />
                </motion.div>

                {/* email */}
                <a className={styles.email} href="amirhosseinsafari19@gmail.com">
                    amir@gmail.com
                </a>

                {/* Lower Element */}
                <div className={`${styles.lowerElements}`}>
                    <motion.div 
                        variants={fadeIn("right","tween",0.3,1)}
                        className={`${styles.experience}`}
                    >
                        <div className="primaryText">10</div>
                        <div className="secondaryText">
                            <div>Years</div>
                            <div>Experience</div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("left","tween",0.5,1)}
                        className={`${styles.certificate}`}
                    >
                        <img src="/certificate.png" alt="certificate" />
                        <span>CERTIFIED PROFATIONAL</span>
                        <span>UI/UX DESIGNER</span>
                    </motion.div>
                </div>

            </motion.div>
        </section>
    );
};

export default Hero;