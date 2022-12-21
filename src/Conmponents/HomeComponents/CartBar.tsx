import React from 'react';
import {
  CartBarLabelWrapper,
  StyledCartBar,
  StyledCartCard,
} from '../StyledComponents/StyledComps';
import CartBarItemCard from './CartBarItemCard';

function CartBar() {
  return (
    <StyledCartBar>
      <CartBarLabelWrapper>Your Cart</CartBarLabelWrapper>
      <CartBarItemCard />
    </StyledCartBar>
  );
}

export default CartBar;
