import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTelegramPlane,
  faWhatsapp,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import { OWNER } from '../../utils/constants';

import styles from './MessengerIcons.module.scss';

const ICONS = {
  telegram: faTelegramPlane,
  whatsapp: faWhatsapp,
  instagram: faInstagram,
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