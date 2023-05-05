import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { OWNER } from '../../utils/constants';

import styles from './Header.module.scss';
import { Logo } from '../Logo/Logo';

export const Header = () => {
  console.log('header');
  return (
    <header className={styles.container}>
      <Logo />
      <div className={styles.contactsBox}>
        <p className={styles.tel}>{OWNER.phoneNumber}</p>
        <a
          href={OWNER.telegramUrl}
          target="_blank"
          rel="noreferrer"
          className={styles.linkBox}
        >
          <FontAwesomeIcon
            icon={['fab', 'telegram-plane']}
            className="text-lg"
          />
        </a>
        <a
          href={OWNER.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className={styles.linkBox}
        >
          <FontAwesomeIcon icon={['fab', 'whatsapp']} className="text-lg" />
        </a>
      </div>
    </header>
  );
};
