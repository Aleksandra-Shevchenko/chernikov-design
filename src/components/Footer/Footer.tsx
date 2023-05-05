import React from 'react';

import { OWNER } from '../../utils/constants';
import { fixPhoneNumber } from '../../utils/common';
import { Logo } from '../Logo/Logo';
import { MessengerIcon } from '../Icons/MessengerIcon';

import styles from './Footer.module.scss';

export const Footer = () => (
  <footer className="text-light">
    <section className={styles.firstSection}>
      <h4 className={styles.title}>Обсудить проект</h4>
      <div className={styles.iconsGroup}>
        <MessengerIcon type="telegram" />
        <MessengerIcon type="whatsapp" />
      </div>
    </section>
    <section className={styles.secondSection}>
      <ul className={styles.list}>
        <li className="underline">
          <a
            href={`mailto:${OWNER.email}?subject=Обсуждение проекта&body=Добрый день, Павел.`}
          >
            {OWNER.email}
          </a>
        </li>
        <li>
          <a href={`tel:${fixPhoneNumber(OWNER.phoneNumber)}`}>
            {OWNER.phoneNumber}
          </a>
        </li>
        <li>Kонфидециальность</li>
      </ul>
      <div className={styles.bottomContainer}>
        <Logo className={styles.logo} />
        <nav>
          <ul className={styles.navList}>
            <li>
              <MessengerIcon type="telegram" className={styles.text} />
            </li>
            <li>
              <MessengerIcon type="whatsapp" className={styles.text} />
            </li>
            <li>
              <MessengerIcon type="instagram" className={styles.text} />
            </li>
          </ul>
        </nav>
      </div>
    </section>
  </footer>
);
