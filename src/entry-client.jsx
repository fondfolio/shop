import React from 'react';
import renderHydrogen from '@shopify/hydrogen/entry-client';
import {ShopifyProvider} from '@shopify/hydrogen/client';
import shopifyConfig from '../shopify.config';
import {AppProvider} from './components/AppProvider';
import * as icons from './svgs';

function ClientApp({children}) {
  return (
    <ShopifyProvider shopifyConfig={shopifyConfig}>
      <AppProvider icons={icons}>{children}</AppProvider>
    </ShopifyProvider>
  );
}

export default renderHydrogen(ClientApp);
