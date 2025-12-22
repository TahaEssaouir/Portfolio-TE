import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en'); // Default to English

  const toggleLang = () => {
    setLang(prev => (prev === 'en' ? 'fr' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

// ✅ نضيفو هذا
export const useLanguage = () => {
  return useContext(LanguageContext);
};

export default LanguageContext;
