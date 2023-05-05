import React from 'react';

import { OWNER } from '../../utils/constants';
import { fixPhoneNumber } from '../../utils/common';

import styles from './Header.module.scss';
import { Logo } from '../Logo/Logo';
import { MessengerIcon } from '../Icons/MessengerIcon';

export const Header = () => {
  console.log('header');

  return (
    <header className={styles.container}>
      <Logo />
      <div className={styles.contactsBox}>
        <a
          className={styles.tel}
          href={`tel:${fixPhoneNumber(OWNER.phoneNumber)}`}
        >
          {OWNER.phoneNumber}
        </a>
        <MessengerIcon type="telegram" />
        <MessengerIcon type="whatsapp" />
      </div>
    </header>
  );
};
