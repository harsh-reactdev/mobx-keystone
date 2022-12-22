import React from 'react';
import {
  CWItemCount,
  StyledWishListAndCart,
} from '../StyledComponents/StyledComps';

function WishlistAndCart() {
  return (
    <>
      <StyledWishListAndCart>
        Cart
        <span>
          <CWItemCount>23</CWItemCount>
        </span>
      </StyledWishListAndCart>
      <StyledWishListAndCart>
        WishList
        <span>
          <CWItemCount>17</CWItemCount>
        </span>
      </StyledWishListAndCart>
    </>
  );
}

export default WishlistAndCart;
