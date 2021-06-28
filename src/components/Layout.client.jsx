import {CartUIProvider} from '@shopify/hydrogen/client';

import Header from './Header.client';
import Footer from './Footer';
import {SkipToContent} from './SkipToContent';

const LINKS = [
  {
    label: 'About',
    url: '/pages/about',
  },
  {
    label: 'FAQs',
    url: '/pages/faqs',
  },
];

export default function Layout({children}) {
  const contentId = 'mainContent';

  return (
    <CartUIProvider>
      <main className="Main">
        <SkipToContent href={`#${contentId}`} />

        <Header links={LINKS} />
        <div id={contentId} className="Content">
          {children}
        </div>
        <Footer />
      </main>
    </CartUIProvider>
  );
}
