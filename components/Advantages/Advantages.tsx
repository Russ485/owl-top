import React from "react";
import { AdvantagesProps } from "./Advantages.props";
import styles from "./Advantages.module.css";
import CheckIcon from "./check2.svg";

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  return (
    <>
      {advantages.map((a) => (
        <div key={a._id} className={styles.advantage}>
          <div className={styles.check}>
            <CheckIcon />
          </div>
          <div className={styles.title}>{a.title}</div>
          <hr className={styles.vline} />
          <div className={styles.description}>{a.description}</div>
        </div>
      ))}
    </>
  );
};
