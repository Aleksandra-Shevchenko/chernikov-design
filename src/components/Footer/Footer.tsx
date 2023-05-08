import React from 'react';

import { fixPhoneNumber } from '../../utils/common';
import { Logo } from '../Logo/Logo';
import { MessengerIcon } from '../Icons/MessengerIcon';
import { useAppConfigContext } from '../../hooks/useAppConfigContext';

import styles from './Footer.module.scss';

export const Footer = () => {
  const config = useAppConfigContext();

  return (
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
              href={`mailto:${config.email}?subject=Обсуждение проекта&body=Добрый день, Павел.`}
            >
              {config.email}
            </a>
          </li>
          <li>
            <a href={`tel:${fixPhoneNumber(config.phoneNumber)}`}>
              {config.phoneNumber}
            </a>
          </li>
          <li>Kонфидециальность</li>
        </ul>
        <div className={styles.bottomContainer}>
          <Logo className={styles.logo} />
          <nav>
            <ul className={styles.navList}>
              <li>
                <MessengerIcon key="vk" type="vk" className={styles.text} />
              </li>
              <li>
                <MessengerIcon
                  key="youtube"
                  type="youtube"
                  className={styles.text}
                />
              </li>
              <li>
                <MessengerIcon
                  key="behance"
                  type="behance"
                  className={styles.text}
                />
              </li>
              <li>
                <MessengerIcon
                  key="telegram"
                  type="telegram"
                  className={styles.text}
                />
              </li>
              <li>
                <MessengerIcon
                  key="whatsapp"
                  type="whatsapp"
                  className={styles.text}
                />
              </li>
              <li>
                <MessengerIcon
                  key="instagram"
                  type="instagram"
                  className={styles.text}
                />
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </footer>
  );
};
