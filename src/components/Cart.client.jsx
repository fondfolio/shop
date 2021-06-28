import React from 'react';
import {
  useCart,
  useRemoveLinesCallback,
  useUpdateLinesCallback,
  Money,
  Image,
} from '@shopify/hydrogen/client';
import {useI18n} from 'lib/translation';

import {Button} from './Button';
import {QuantityControls} from './QuantityControls';

export function Cart({items, totalPrice}) {
  const translations = useI18n();
  const {checkoutUrl} = useCart();

  if (!items && !totalPrice) {
    return null;
  }

  const footerMarkup = totalPrice ? (
    <div className="Cart__Bottom">
      <div className="Cart__Subtotal">
        <span className="Cart__SubtotalLabel Heading--4">
          {translations?.cart?.subtotal}
        </span>
        <span className="Cart__SubtotalValue Heading--2">
          <Money
            money={{
              amount: totalPrice.amount,
              currencyCode: totalPrice.currencyCode,
            }}
          />
        </span>
      </div>
      <Button extrude circle primary url={checkoutUrl}>
        <span className="Button__Target">
          {translations.layout.cart.checkout}
        </span>
      </Button>
    </div>
  ) : null;

  return (
    <div className="Cart">
      <CartContents items={items} />
      {footerMarkup}
    </div>
  );
}

function CartContents() {
  const translations = useI18n();
  const removeLines = useRemoveLinesCallback();
  const updateLines = useUpdateLinesCallback();
  const {lines} = useCart();

  if (lines.length === 0) {
    return (
      <div className="Cart__Empty Format">
        <h2>{translations.layout.cart?.empty_cart_heading}</h2>
        <p>{translations.layout.cart?.empty_cart_text}</p>
        <Button inverted primary outline url="/products/pawzzle">
          {translations.layout.cart?.empty_cart_action_text}
        </Button>
      </div>
    );
  }

  const itemsMarkup = lines.map((line) => {
    console.log(line);

    const byLineMarkup = (
      <span className="Item__ByLine">
        {translations.layout.cart.no_variants_text}
      </span>
    );

    return (
      <div className="Item" key={line.id}>
        <div className="Item__Image">
          <Image
            className="bg-white rounded w-full h-full object-cover"
            image={line.merchandise.image}
          />
        </div>
        <div className="Item__Details">
          <div className="Item__Line">
            <div className="Item__Info">
              <Button inverted url={line.merchandise.product.handle}>
                {line.merchandise.product.title}
              </Button>
              {byLineMarkup}
            </div>
            <Button
              inverted
              small
              primary
              onClick={() => {
                removeLines([line.id]);
              }}
            >
              {translations.layout.cart.remove}
            </Button>
          </div>
          <div className="Item__Line">
            <QuantityControls
              outline
              inverted
              quantity={line.quantity}
              onAdd={() => {
                updateLines([{id: line.id, quantity: line.quantity + 1}]);
              }}
              onSubtract={() => {
                updateLines([{id: line.id, quantity: line.quantity - 1}]);
              }}
            />

            <div className="Item__Price medium">
              <Money
                money={{
                  amount: line.merchandise.priceV2.amount * line.quantity,
                  currencyCode: line.merchandise.priceV2.currencyCode,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <>{itemsMarkup}</>;
}
