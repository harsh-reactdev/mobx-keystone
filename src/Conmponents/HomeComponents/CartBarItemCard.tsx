import React from 'react';
import {
  CartBarImg,
  StyledCartCard,
  StyledItemImg,
} from '../StyledComponents/StyledComps';

function CartBarItemCard() {
  return (
    <StyledCartCard>
      <CartBarImg
        src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
        alt=""
      />
    </StyledCartCard>
  );
}

export default CartBarItemCard;
