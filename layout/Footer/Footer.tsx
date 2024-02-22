import React from "react";
import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import classnames from "classnames";
import { format } from "date-fns";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={classnames(className, styles.footer)} {...props}>
      <div>OwlTop 2023 - {format(new Date(), "yyyy")} All right reserved</div>
      <a href="#" target="_blank">
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank">
        Политика конфиденциальности
      </a>
    </footer>
  );
};
