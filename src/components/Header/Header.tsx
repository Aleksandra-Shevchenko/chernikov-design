import React from 'react';

import { fixPhoneNumber } from '../../utils/common';

import styles from './Header.module.scss';
import { Logo } from '../Logo/Logo';
import { MessengerIcon } from '../Icons/MessengerIcon';
import { useAppConfigContext } from '../../hooks/useAppConfigContext';

export const Header = () => {
  const config = useAppConfigContext();

  return (
    <header className={styles.container}>
      <Logo className=" text-xs xs:text-sm md:text-lg" />
      <div className={styles.contactsBox}>
        <a
          className={styles.tel}
          href={`tel:${fixPhoneNumber(config.phoneNumber)}`}
        >
          {config.phoneNumber}
        </a>
        <MessengerIcon type="telegram" className="text-sm xs:text-lg" />
        <MessengerIcon type="whatsapp" className="text-sm xs:text-lg" />
      </div>
    </header>
  );
};
