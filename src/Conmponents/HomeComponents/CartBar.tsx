import React from 'react';
import {
  CartBarLabelWrapper,
  StyledCartBar,
  StyledCartCard,
} from '../StyledComponents/StyledComps';
import CartItems from './CartItems';

function CartBar() {
  return (
    <StyledCartBar>
      <CartBarLabelWrapper>Your Cart</CartBarLabelWrapper>
      {/* <CartBarItemCard /> */}
      <CartItems />
    </StyledCartBar>
  );
}

export default CartBar;
