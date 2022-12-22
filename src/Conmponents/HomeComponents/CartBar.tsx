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
  const total = storeCtx.cartProducts.reduce(
    (acc, item) => acc + item.price,
    0
  );
  return (
    <StyledCartBar>
      <CartBarLabelWrapper>Your Cart</CartBarLabelWrapper>
      {/* <CartBarItemCard /> */}
      <CartItems />
      <CartTotalVal>{total.toFixed(2)}</CartTotalVal>
    </StyledCartBar>
  );
}

export default observer(CartBar);
