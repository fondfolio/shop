import React, {useContext} from 'react';

import translations from '../translations/en.json';

export const TranslationContext = React.createContext({});

export const useI18n = () => useContext(TranslationContext);

export function TranslationProvider({children}) {
  return (
    <TranslationContext.Provider value={translations}>
      {children}
    </TranslationContext.Provider>
  );
}
