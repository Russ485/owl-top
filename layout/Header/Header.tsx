import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import Logo from "../logo.svg";
import classnames from "classnames";
import { ButtonIcon } from "../../components";
import { motion, useReducedMotion } from "framer-motion";
import { Sidebar } from "../Sidebar/Sidebar";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setIsOpened(false);
  }, [router]);

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20,
      },
    },
    closed: {
      opacity: shouldReduceMotion ? 1 : 0,
      x: "100%",
    },
  };

  return (
    <header className={classnames(className, styles.header)} {...props}>
      <Logo />
      <ButtonIcon
        appearence="white"
        icon="menu"
        onClick={() => setIsOpened(true)}
      />
      <motion.div
        className={styles.mobileMenu}
        variants={variants}
        initial={"closed"}
        animate={isOpened ? "opened" : "closed"}
      >
        <Sidebar />
        <ButtonIcon
          className={styles.menuClose}
          appearence="white"
          icon="close"
          onClick={() => setIsOpened(false)}
        />
      </motion.div>
    </header>
  );
};
