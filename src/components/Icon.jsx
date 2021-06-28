import React from 'react';
import {classNames} from '@shopify/css-utilities';
import {useIcons} from 'lib/icons';

export function Icon({name, inverted, ...rest}) {
  const icons = useIcons();
  const Svg = icons[name];

  const iconClassName = classNames('Icon', {
    'Icon--inverted': inverted,
  });

  if (!Svg) {
    return null;
    // throw Error(`Icon ${icon} not found.`);
  }

  if (typeof Svg === 'string') {
    return null;
  }

  return (
    <div className={iconClassName}>
      <Svg {...rest} />
    </div>
  );
}
