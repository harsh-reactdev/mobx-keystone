import React from 'react';
import { StyledHeader } from '../StyledComponents/StyledComps';
import WishlistAndCart from './WishListAndCart';

function Header() {
  return (
    <StyledHeader>
      theShoppingCart.Co 🛒
      <WishlistAndCart />
    </StyledHeader>
  );
}

export default Header;
