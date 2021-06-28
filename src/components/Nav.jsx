import React from 'react';
import {
  useCart,
  useCartLineItemCount,
  useCartUI,
  CartContainer,
} from '@shopify/hydrogen/client';
import {classNames} from '@shopify/css-utilities';
import {useI18n} from 'lib/translation';

import {Icon} from './Icon';
import {Cart} from './Cart.client';
import {Button} from './Button';
import {Drawer} from './Drawer';

export function Nav({links}) {
  const translations = useI18n();
  const {isCartOpen, toggleCart} = useCartUI();
  const {lines, total} = useCart();
  const itemCount = useCartLineItemCount();

  const linksMarkup = links
    ? links.map((link) => {
        return (
          <li key={link.label}>
            <Button primary url={link.url}>
              {link.label}
            </Button>
          </li>
        );
      })
    : null;

  if (!lines) {
    return (
      <div className="Nav">
        <div className="Nav__Menu">
          <ul className="Menu">{linksMarkup}</ul>
        </div>
      </div>
    );
  }

  const cartText = isCartOpen
    ? translations.layout.cart?.close
    : translations.layout.cart?.title;

  return (
    <div className="Nav">
      <div className="Nav__Menu">
        <ul className="Menu">{linksMarkup}</ul>
      </div>
      <CartToggle
        open={isCartOpen}
        text={cartText}
        count={itemCount}
        onClick={() => {
          toggleCart();
        }}
      />
      <Drawer
        open={isCartOpen}
        onClose={() => {
          toggleCart();
        }}
      >
        <CartContainer id="Cart">
          <Cart items={lines} totalPrice={total} />
        </CartContainer>
      </Drawer>
    </div>
  );
}

function CartToggle({onClick, text, count, loading, open}) {
  const buttonClassName = classNames('Button', {
    CartToggle: true,
    'Button--primary': true,
    'Button--inverted': open,
  });
  const loadingOrCountMarkupContent = loading ? <Icon name="Spinner" /> : count;
  const countMarkup = open ? (
    <Icon name="Close" />
  ) : (
    <span className="Count">
      <span className="Count__Text">{loadingOrCountMarkupContent}</span>
    </span>
  );

  return (
    <button className={buttonClassName} onClick={onClick} type="button">
      {countMarkup}
      <span className="visually-hidden">{text}</span>
    </button>
  );
}
