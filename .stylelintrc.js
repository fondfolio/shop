module.exports = {
  extends: ['@shopify/stylelint-plugin', '@shopify/stylelint-plugin/prettier'],
  rules: {
    'selector-class-pattern': null,
    'order/properties-order': null,
    'selector-max-combinators': null,
    'selector-max-specificity': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'selector-max-class': 3,
    'selector-max-type': 2,
  },
};
