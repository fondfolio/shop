import React from 'react';
import {Link} from '@shopify/hydrogen/client';
import {useUrl} from 'lib/url';

import {Icon} from './Icon';

export function Logo() {
  const url = useUrl();

  return (
    <Link className="Logo" to={url.home()}>
      <Icon name="Logo" />
    </Link>
  );
}
