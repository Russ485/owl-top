import React, { forwardRef, ForwardedRef } from "react";
import { InputProps } from "./Input.props";
import styles from "./Input.module.css";
import classnames from "classnames";

export const Input = forwardRef(
  (
    { className, error, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <div className={classnames(className, styles.inputWrapper)}>
        <input
          className={classnames(styles.input, {
            [styles.error]: error,
          })}
          ref={ref}
          {...props}
        />
        {error && (
          <span role="alert" className={styles.errorMessage}>
            {error.message}
          </span>
        )}
      </div>
    );
  }
);
