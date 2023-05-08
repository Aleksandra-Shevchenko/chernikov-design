import React from 'react';

import { useAppConfigContext } from '../../hooks/useAppConfigContext';

import styles from './Prices.module.scss';
import { PriceCard } from './PriceCard/PriceCard';

export const Prices = () => {
  const config = useAppConfigContext();

  return (
    <section className={styles.container}>
      <ul className={styles.content}>
        {config.prices.map((price) => (
          <PriceCard price={price} key={price.title} />
        ))}
      </ul>
    </section>
  );
};
