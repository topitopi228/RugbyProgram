import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { LanguageContext } from './LanguageUtils';
import type { Language } from './LanguageUtils.tsx';

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('UA');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};