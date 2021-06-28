import React from 'react';
import {useI18n} from 'lib/translation';

import {Button} from './Button';

export function QuantityControls({
  outline,
  inverted,
  quantity,
  onAdd,
  onSubtract,
}) {
  const translations = useI18n();

  return (
    <div className="QuantityControls">
      <Button
        outline={outline}
        inverted={inverted}
        primary
        icon={{
          name: 'Subtract',
          fallbackText: translations.layout.cart.subtract_item,
        }}
        onClick={onSubtract}
      />
      <span className="strong Item__Quantity">{quantity}</span>
      <Button
        outline={outline}
        inverted={inverted}
        primary
        icon={{
          name: 'Add',
          fallbackText: translations.layout.cart.add_item,
        }}
        onClick={onAdd}
      />
    </div>
  );
}
