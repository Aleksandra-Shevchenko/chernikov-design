import React from 'react';
import clsx from 'clsx';

import { OWNER } from '../../utils/constants';

import styles from './Logo.module.scss';

export const Logo = ({ className }: { className?: string }) => (
  <a href="/" className={clsx(styles.logo, className)}>
    {OWNER.logo}
  </a>
);
