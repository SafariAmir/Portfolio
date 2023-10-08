import React, { useState, useRef } from "react";
import styles from "./Header.module.scss";
import { BiMenuAltRight, BiPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";
const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  //to handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`bg-primary paddings ${styles.wrapper}`}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`flexCenter ${styles.container} innerWidth`}>
        <div className={styles.name}>Binjan</div>
        <ul
          style={getMenuStyles(menuOpened)}
          ref={menuRef}
          className={`flexCenter ${styles.menu}`}
        >
          <li>
            <a href="#experties">Services</a>
          </li>
          <li>
            <a href="#works">Experience</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#people">Testimonials</a>
          </li>
          <li className={`flexCenter ${styles.phone}`}>
            <p>+123 456 789</p>
            <BiPhoneCall size={"40px"} />
          </li>
        </ul>

        {/* //for sm and md size screen */}
        <div
          className={styles.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
