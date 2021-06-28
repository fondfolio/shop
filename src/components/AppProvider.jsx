import React from 'react';
import {UrlProvider} from 'lib/url';
import {IconContext} from 'lib/icons';
import {TranslationProvider} from 'lib/translation';

export function AppProvider({children, icons}) {
  return (
    <IconContext.Provider value={icons}>
      <TranslationProvider>
        <UrlProvider>{children}</UrlProvider>
      </TranslationProvider>
    </IconContext.Provider>
  );
}
