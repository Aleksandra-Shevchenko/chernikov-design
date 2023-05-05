import React from 'react';

import styles from './PriceCard.module.scss';

export const PriceCard = ({
  price,
}: {
  price: {
    title: string;
    list: string[];
    price: string;
  };
}) => (
  <li className={styles.container}>
    <div className={styles.titleBox}>
      <h3 className={styles.title}>{price.title}</h3>
      <p className={styles.price}>{price.price}</p>
    </div>
    <ul className={styles.list}>
      {price.list.map((item) => (
        <li className={styles.text} key={item}>{`${item}`}</li>
      ))}
    </ul>
  </li>
);
