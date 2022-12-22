import React from 'react';
import {
  CartBarLabelWrapper,
  StyledCartBar,
  StyledCartCard,
} from '../StyledComponents/StyledComps';
import CartBarItemCard from './CartBarItemCard';
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
