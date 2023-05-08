import React from 'react';

import avatar from '../../images/avatar/avatar.jpg';
import avatarLage from '../../images/avatar/avatar@3x.jpg';
import { useAppConfigContext } from '../../hooks/useAppConfigContext';

import styles from './AboutMe.module.scss';

export const AboutMe = () => {
  const config = useAppConfigContext();

  return (
    <article className={styles.container}>
      <div className={styles.content}>
        <picture className={styles.avatarContainer}>
          <source srcSet={`${avatar} 1x`} media="(max-width: 500px)" />
          <img
            srcSet={`${avatarLage} 3x`}
            alt="Full Logo"
            className={styles.avatar}
          />
        </picture>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{config.aboutMe}</h1>
          <p className={styles.subtitle}>{config.description}</p>
        </div>
      </div>
    </article>
  );
};
