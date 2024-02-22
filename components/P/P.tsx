import React from "react";
import { PProps } from "./P.props";
import styles from "./P.module.css";
import classnames from "classnames";

export const P = ({
  size = "m",
  children,
  className,
  ...props
}: PProps): JSX.Element => {
  return (
    <p
      className={classnames(styles.p, className, {
        [styles.s]: size === "s",
        [styles.m]: size === "m",
        [styles.l]: size === "l",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
