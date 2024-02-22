import React from "react";
import { SortEnum, SortProps } from "./Sort.props";
import styles from "./Sort.module.css";
import classnames from "classnames";
import SortIcon from "./sort.svg";

export const Sort = ({
  setSort,
  sort,
  className,
  ...props
}: SortProps): JSX.Element => {
  return (
    <div className={classnames(styles.sort, className)} {...props}>
      <div className={styles.sortName} id="sort">
        Сортировка
      </div>
      <button
        id="rating"
        onClick={() => setSort(SortEnum.Rating)}
        className={classnames({ [styles.active]: sort === SortEnum.Rating })}
        aria-selected={sort === SortEnum.Rating}
        area-labelledby="sort rating"
      >
        <SortIcon className={styles.sortIcon} />
        По рейтингу
      </button>
      <button
        id="price"
        onClick={() => setSort(SortEnum.Price)}
        className={classnames({ [styles.active]: sort === SortEnum.Price })}
        aria-selected={sort === SortEnum.Price}
        area-labelledby="sort price"
      >
        <SortIcon className={styles.sortIcon} />
        По цене
      </button>
    </div>
  );
};
