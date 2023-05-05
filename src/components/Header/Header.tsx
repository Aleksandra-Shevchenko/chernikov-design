import React from 'react';

import { OWNER } from '../../utils/constants';
import { fixPhoneNumber } from '../../utils/common';

import styles from './Header.module.scss';
import { Logo } from '../Logo/Logo';
import { MessengerIcon } from '../Icons/MessengerIcon';

export const Header = () => (
  <header className={styles.container}>
    <Logo className=" text-xs xs:text-sm md:text-lg" />
    <div className={styles.contactsBox}>
      <a
        className={styles.tel}
        href={`tel:${fixPhoneNumber(OWNER.phoneNumber)}`}
      >
        {OWNER.phoneNumber}
      </a>
      <MessengerIcon type="telegram" className="text-sm xs:text-lg" />
      <MessengerIcon type="whatsapp" className="text-sm xs:text-lg" />
    </div>
  </header>
);
