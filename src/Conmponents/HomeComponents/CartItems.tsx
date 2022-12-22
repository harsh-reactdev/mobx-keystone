import React, { useContext } from 'react';
import { storeContext } from '../../Core/Store';
import {
  StyledCartCard,
  CartBarImg,
  ItemCountDiv,
  IncrementBtn,
  ItemCountValue,
  DecrementBtn,
} from '../StyledComponents/StyledComps';

function CartItems() {
  const storeCtx = useContext(storeContext);

  const list = storeCtx.cartProducts.map((item) => (
    <StyledCartCard>
      <CartBarImg src={item.image} alt={item.title} />
      <ItemCountDiv>
        <IncrementBtn>+</IncrementBtn>
        <ItemCountValue>10</ItemCountValue>
        <DecrementBtn>-</DecrementBtn>
      </ItemCountDiv>
    </StyledCartCard>
  ));

  return <>{list}</>;
}

export default CartItems;
