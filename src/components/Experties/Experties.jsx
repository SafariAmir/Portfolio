import React from "react";
import { WhatDoIHelp, projectExperience } from "../../utils/data";
import styles from "./Experties.module.scss";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion";

const Experties = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={styles.wrapper}
    >
      <a className="anchor" id="experties"></a>
      <div
        className={`paddings yPaddings flexCenter innerWidth ${styles.container}`}
      >
        <div className={styles.leftSide}>
          {projectExperience.map((exp, i) => {
            return (
              <motion.div variants={fadeIn('right','tween',(i+1)*0.2,1)} className={styles.exp} key={i}>
                <div className="flexCenter" style={{ background: exp.bg }}>
                  <exp.icon size={25} color="white" />
                </div>
                <div>
                  <span>{exp.name}</span>
                  <span className="secondaryText">{exp.projects} Projects</span>
                </div>
              </motion.div>
            );
          })}
        </div>
        <motion.div variants={textVariant(0.5)} className={styles.rightSide}>
          <span className="primaryText">What Do I Help?</span>
          {WhatDoIHelp.map((paragraph, i) => {
            return (
              <span key={i} className="secondaryText">
                {paragraph}
              </span>
            );
          })}

          <div className={`flexCenter ${styles.stats}`}>
            <div className={`flexCenter ${styles.state}`}>
              <span className="primaryText">+285</span>
              <span className="secondaryText">Projects Completed</span>
            </div>
            <div className={`flexCenter ${styles.state}`}>
              <span className="primaryText">+90</span>
              <span className="secondaryText">Happy Clients</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experties;
