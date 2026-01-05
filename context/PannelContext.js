'use client';
import { useContext, createContext, useState } from 'react';

const PannelContext = createContext();

export const usePannelContext = () => useContext(PannelContext);

const PannelContextProvider = ({ children }) => {
  const [showPannel, setShowPannel] = useState(false);
  const [accountPannel, setAccountPannel] = useState(false);
  return (
    <PannelContext.Provider value={{ showPannel, setShowPannel, accountPannel, setAccountPannel}}>
      {children}
    </PannelContext.Provider>
  );
};

export default PannelContextProvider;