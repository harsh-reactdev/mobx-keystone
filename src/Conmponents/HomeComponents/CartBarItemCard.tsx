import React from 'react';
import {
  CartBarImg,
  DecrementBtn,
  IncrementBtn,
  ItemCountDiv,
  ItemCountValue,
  StyledCartCard,
  StyledItemImg,
} from '../StyledComponents/StyledComps';
// import { observer } from 'mobx-react/dist/observer';

function CartBarItemCard() {
  return (
    <StyledCartCard>
      <CartBarImg
        src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
        alt=""
      />
      <ItemCountDiv>
        <IncrementBtn>+</IncrementBtn>
        <ItemCountValue>10</ItemCountValue>
        <DecrementBtn>-</DecrementBtn>
      </ItemCountDiv>
    </StyledCartCard>
  );
}

export default CartBarItemCard;
