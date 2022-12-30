import React, { useContext } from 'react';
import {
  CartBarLabelWrapper,
  StyledWishListBar,
} from '../StyledComponents/StyledComps';
import { observer } from 'mobx-react';
import WishlistItems from './WishlistItems';

function Wishlist() {
    // const storeCtx = useContext(storeContext);
    // const total = storeCtx.cartProducts.reduce(
    //   (acc, item) => acc + item.price,
    //   0
    // );
  return (
    <StyledWishListBar>
      <CartBarLabelWrapper>Your Wishlist</CartBarLabelWrapper>
      {/* <CartBarItemCard /> */}
      <WishlistItems />
      {/* <CartTotalVal>{total.toFixed(2)}</CartTotalVal> */}
    </StyledWishListBar>
  );
}

export default observer(Wishlist);
