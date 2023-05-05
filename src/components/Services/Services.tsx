import React from 'react';

import { OWNER } from '../../utils/constants';

import styles from './Services.module.scss';
import { ServiceCard } from './ServiceCard/ServiceCard';

export const Services = () => {
  console.log('Services');
  return (
    <section className={styles.container}>
      <ul className={styles.content}>
        {OWNER.services.map((service, index) => (
          <ServiceCard
            service={service}
            key={service.title}
            number={index + 1}
          />
        ))}
      </ul>
    </section>
  );
};
