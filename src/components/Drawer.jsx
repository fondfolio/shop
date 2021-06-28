import React from 'react';
import {classNames} from '@shopify/css-utilities';
import {useI18n} from 'lib/translation';

import {Button} from './Button';

export function Drawer({open, children, footer, onClose, title}) {
  const translations = useI18n();
  const drawerClassName = classNames('Drawer', {
    'Drawer--open': open,
  });

  return (
    <div className={drawerClassName}>
      <div className="Drawer__Header">
        <Button
          inverted
          icon={{
            name: 'ArrowLeft',
            fallbackText: translations.layout.cart.continue_browsing,
          }}
          onClick={() => {
            if (onClose) {
              onClose();
            }
          }}
        />
        <span className="Drawer__Title">{title}</span>
      </div>
      <div className="Drawer__Body">{children}</div>
      <div className="Drawer__Footer">{footer}</div>
    </div>
  );
}
