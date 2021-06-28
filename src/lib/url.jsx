import React, {useContext, useMemo} from 'react';

export const UrlContext = React.createContext({});

export const useUrl = () => useContext(UrlContext);

class Url {
  home() {
    return '/';
  }

  product(slug) {
    return `/products/${slug}`;
  }

  page(slug) {
    return `/page/${slug}`;
  }
}

export function UrlProvider({children}) {
  const value = useMemo(() => new Url(), []);

  return <UrlContext.Provider value={value}>{children}</UrlContext.Provider>;
}
