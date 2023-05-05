import React from 'react';

import styles from './ServiceCard.module.scss';

export const ServiceCard = ({
  service,
  number,
}: {
  service: {
    title: string;
    list: string[];
  };
  number: number;
}) => (
  <li className={styles.container}>
    <div className="max-w-[90%]">
      <h2 className={styles.title}>{service.title}</h2>
      <ul>
        {service.list.map((item) => (
          <li className={styles.text}>&ndash;{` ${item}`}</li>
        ))}
      </ul>
    </div>
    <span className={styles.numberContainer}>
      <span className={styles.number}>{number}</span>
    </span>
  </li>
);
