import React from "react";
import { workExp } from "../../utils/data";
import styles from "./Works.module.scss";
import { motion } from "framer-motion";
import { staggerChildren, textVariant2 , fadeIn, zoomIn } from "../../utils/motion";

const Works = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={staggerChildren}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${styles.wrapper}`}
    >
      <a className="anchor" id="works"></a>
      <div className={`flexCenter innerWidth ${styles.container}`}>
        <span className="primaryText yPaddings">My Work Experience</span>

        <div className={`flexCenter ${styles.experiences}`}>

          {workExp.map((exp, i) => {
            return (
              <motion.div variants={textVariant2} className={`flexCenter ${styles.exp}`} key={i}>
                <div className={styles.post}>
                  <h1>{exp.place}</h1>
                  <p>{exp.tenure}</p>
                </div>
                <div className={styles.role}>
                  <h1>{exp.role}</h1>
                  <p>{exp.detail}</p>
                </div>
              </motion.div>
            );
          })}

          <motion.div variants={zoomIn(1, 1)} className={styles.proressbar}>
            <motion.div variants={fadeIn("down", "tween", 2, 1.5)} className={styles.line}></motion.div>
                <div><div className={styles.circle} style={{background : '#286F6C'}}></div></div>
                <div><div className={styles.circle} style={{background : '#F2704E'}}></div></div>
                <div><div className={styles.circle} style={{background : '#EEC048'}}></div></div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default Works;
