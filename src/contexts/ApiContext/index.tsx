import React, { type ReactNode } from 'react';
import services, { type Services } from './services';

const ApiContext = React.createContext<Services>(services);

export const ApiProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <ApiContext.Provider value={services}>{children}</ApiContext.Provider>;
};

export const useApi = (): Services => React.useContext(ApiContext);
