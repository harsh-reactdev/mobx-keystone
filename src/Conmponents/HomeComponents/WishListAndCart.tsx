import React from 'react';
import {
  CWItemCount,
  StyledWishList,
  StyledCart,
} from '../StyledComponents/StyledComps';

function WishlistAndCart() {
  return (
    <>
      <StyledCart>
        Cart
        <span>
          <CWItemCount>23</CWItemCount>
        </span>
      </StyledCart>
      {/* <br /> */}
      <StyledWishList>
        WishList
        <span>
          <CWItemCount>17</CWItemCount>
        </span>
      </StyledWishList>
    </>
  );
}

export default WishlistAndCart;
