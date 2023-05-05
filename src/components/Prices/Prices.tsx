import React from 'react';

import { OWNER } from '../../utils/constants';

import styles from './Prices.module.scss';
import { PriceCard } from './PriceCard/PriceCard';

export const Prices = () => {
  console.log('Prices');
  return (
    <section className={styles.container}>
      <ul className={styles.content}>
        {OWNER.prices.map((price) => (
          <PriceCard price={price} key={price.title} />
        ))}
      </ul>
    </section>
  );
};
