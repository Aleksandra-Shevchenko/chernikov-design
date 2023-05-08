import React from 'react';

import { useAppConfigContext } from '../../hooks/useAppConfigContext';

import styles from './Services.module.scss';
import { ServiceCard } from './ServiceCard/ServiceCard';

export const Services = () => {
  const config = useAppConfigContext();

  return (
    <section className={styles.container}>
      <ul className={styles.content}>
        {config.services.map((service, index) => (
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
