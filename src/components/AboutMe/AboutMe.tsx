import React from 'react';

import { OWNER } from '../../utils/constants';

import styles from './AboutMe.module.scss';
import avatar from '../../images/avatar/avatar.jpg';
import avatarLage from '../../images/avatar/avatar@3x.jpg';

export const AboutMe = () => {
  console.log('AboutMe');
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
          <h1 className={styles.title}>{OWNER.mainDescription}</h1>
          <p className={styles.subtitle}>{OWNER.description}</p>
        </div>
      </div>
    </article>
  );
};
