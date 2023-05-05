import React from 'react';
import clsx from 'clsx';

import { OWNER } from '../../utils/constants';

export const Logo = ({ className }: { className?: string }) => (
  <a
    href="/"
    className={clsx('text-white text-lg font-steppe font-extrabold', className)}
  >
    {OWNER.logo}
  </a>
);
