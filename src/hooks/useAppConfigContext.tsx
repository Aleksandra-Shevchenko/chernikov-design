import { useContext } from 'react';
import { AppConfigContext } from '../contexts/AppConfigContext';

export const useAppConfigContext = () => {
  const contextValue = useContext(AppConfigContext);

  if (!contextValue) {
    throw Error('Context has not been Provided!');
  }

  return contextValue;
};
