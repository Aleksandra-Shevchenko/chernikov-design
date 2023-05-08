import { createContext } from 'react';

import { AppConfigContextType } from './AppConfigContext.types';

export const AppConfigContext = createContext<AppConfigContextType | null>(
  null,
);
