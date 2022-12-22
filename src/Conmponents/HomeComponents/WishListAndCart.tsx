import React, { useContext } from 'react';
import {
  CWItemCount,
  StyledWishList,
  StyledCart,
} from '../StyledComponents/StyledComps';
import { observer } from 'mobx-react';
import { storeContext } from '../../Core/Store';

function WishlistAndCart() {
  const storeCtx = useContext(storeContext);

  const itemsCount = {
    cart: storeCtx.cartProducts.length,
    wishlist: storeCtx.wishlist.length,
  };
  return (
    <>
      <StyledCart>
        Cart
        <span>
          <CWItemCount>{itemsCount.cart}</CWItemCount>
        </span>
      </StyledCart>
      {/* <br /> */}
      <StyledWishList>
        WishList
        <span>
          <CWItemCount>{itemsCount.wishlist}</CWItemCount>
        </span>
      </StyledWishList>
    </>
  );
}

export default observer(WishlistAndCart);
