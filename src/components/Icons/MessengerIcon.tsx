import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTelegramPlane,
  faWhatsapp,
  faInstagram,
  faBehance,
  faYoutube,
  faVk,
} from '@fortawesome/free-brands-svg-icons';

import { OWNER } from '../../utils/constants';

import styles from './MessengerIcons.module.css';

const ICONS = {
  telegram: faTelegramPlane,
  whatsapp: faWhatsapp,
  instagram: faInstagram,
  behance: faBehance,
  youtube: faYoutube,
  vk: faVk,
};

export const MessengerIcon = ({
  type,
  className,
}: {
  type: keyof typeof ICONS;
  className?: string;
}) => (
  <a
    href={OWNER[type]}
    target="_blank"
    rel="noreferrer"
    className={styles.linkBox}
  >
    <FontAwesomeIcon
      // @ts-ignore
      icon={ICONS[type]}
      className={clsx('text-lg', className)}
    />
  </a>
);
