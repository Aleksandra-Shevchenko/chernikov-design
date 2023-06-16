import React, { ForwardedRef, forwardRef } from 'react';

import { fixPhoneNumber } from '../../utils/common';

import styles from './Header.module.css';
import { Logo } from '../Logo/Logo';
import { MessengerIcon } from '../Icons/MessengerIcon';
import { useAppConfigContext } from '../../hooks/useAppConfigContext';

// eslint-disable-next-line react/display-name
export const Header = forwardRef(
  (_props, ref: ForwardedRef<HTMLElement> | null) => {
    const config = useAppConfigContext();

    return (
      <header className={styles.container} ref={ref}>
        <div className={styles.content}>
          <Logo className="text-xs xs:text-sm md:text-lg" />
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
        </div>
      </header>
    );
  },
);
