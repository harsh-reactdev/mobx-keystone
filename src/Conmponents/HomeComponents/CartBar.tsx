import React, { useContext } from 'react';
import {
  CartBarLabelWrapper,
  CartTotalVal,
  StyledCartBar,
  StyledCartCard,
} from '../StyledComponents/StyledComps';
import CartItems from './CartItems';
import { storeContext } from '../../Core/Store';
import { observer } from 'mobx-react';

function CartBar() {
  const storeCtx = useContext(storeContext);

  return (
    <StyledCartBar>
      <CartBarLabelWrapper>Your Cart</CartBarLabelWrapper>
      {/* <CartBarItemCard /> */}
      <CartItems />
      <CartTotalVal>{storeCtx.cartTotal}</CartTotalVal>
    </StyledCartBar>
  );
}

export default observer(CartBar);
