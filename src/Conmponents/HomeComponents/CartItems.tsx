import React, { useContext, useState } from 'react';
import { storeContext } from '../../Core/Store';
import {
  StyledCartCard,
  CartBarImg,
  ItemCountDiv,
  IncrementBtn,
  ItemCountValue,
  DecrementBtn,
} from '../StyledComponents/StyledComps';
import { observer } from 'mobx-react';

const CartItems = observer(() => {
  const storeCtx = useContext(storeContext);

  const [itemCount, setItemCount] = useState(0);

  const list = storeCtx.cartProducts.map((item) => (
    <StyledCartCard>
      <CartBarImg src={item.image} alt={item.title} />
      <ItemCountDiv>
        <IncrementBtn onClick={() => setItemCount(itemCount + 1)}>
          +
        </IncrementBtn>
        <ItemCountValue>{itemCount}</ItemCountValue>
        <DecrementBtn onClick={() => setItemCount(itemCount - 1)}>
          -
        </DecrementBtn>
      </ItemCountDiv>
    </StyledCartCard>
  ));

  return <>{list}</>;
});

export default CartItems;
