import React, { useEffect } from "react";
import { ButtonProps } from "./Button.props";
import ArrowIcon from "./arrow.svg";
import styles from "./Button.module.css";
import classnames from "classnames";
import { motion, useMotionValue } from "framer-motion";

export const Button = ({
  appearence,
  arrow = "none",
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  // const scale = useMotionValue(1);

  // useEffect(() => {
  //   scale.onChange((s) => console.log(s));
  // }, [scale]);

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className={classnames(styles.button, className, {
        [styles.primary]: appearence === "primary",
        [styles.ghost]: appearence === "ghost",
      })}
      {...props}
      // style={{ scale }}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={classnames(styles.arrow, {
            [styles.down]: arrow === "down",
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </motion.button>
  );
};
