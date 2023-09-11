'use client';

import { createContext, useContext, useState } from 'react';

const MobileMenuContext = createContext();

export const useMobileMenuContext = () => {
  return useContext(MobileMenuContext);
};

export const MobileMenuProvider = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const openMobileMenu = () => {
    setMobileMenu(true);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  return (
    <MobileMenuContext.Provider
      value={{ mobileMenu, openMobileMenu, closeMobileMenu }}
    >
      {children}
    </MobileMenuContext.Provider>
  );
};
