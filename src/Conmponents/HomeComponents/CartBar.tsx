import React from 'react';
import {
  CartBarLabelWrapper,
  StyledCartBar,
  StyledCartCard,
} from '../StyledComponents/StyledComps';

function CartBar() {
  return (
    <StyledCartBar>
      <CartBarLabelWrapper>Your Cart</CartBarLabelWrapper>

      <StyledCartCard />
    </StyledCartBar>
  );
}

export default CartBar;
