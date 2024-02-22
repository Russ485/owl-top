import React, { forwardRef, ForwardedRef } from "react";
import { TextareaProps } from "./Textarea.props";
import styles from "./Textarea.module.css";
import classnames from "classnames";

export const Textarea = forwardRef(
  (
    { className, error, ...props }: TextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ): JSX.Element => {
    return (
      <div className={classnames(className, styles.textAreaWrapper)}>
        <textarea
          className={classnames(styles.textarea, {
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
