import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { OWNER } from '../../utils/constants';

import styles from './Header.module.scss';

export const Header = () => {
  console.log('header');
  return (
    <div className={styles.container}>
      <a href="/" className={styles.logo}>
        {OWNER.logo}
      </a>
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
    </div>
  );
};
