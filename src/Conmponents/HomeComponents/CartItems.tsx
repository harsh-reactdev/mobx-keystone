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
import { applyDelete } from 'mobx-keystone';

const CartItems = observer(() => {
  const storeCtx = useContext(storeContext);

  const [itemCount, setItemCount] = useState(1);

  const list = storeCtx.cartProducts.map((item, index) => (
    <StyledCartCard key={index}>
      <CartBarImg src={item.image} alt={item.title} />
      <ItemCountDiv>
        <IncrementBtn onClick={() => setItemCount(itemCount + 1)}>
          +
        </IncrementBtn>
        <ItemCountValue>{itemCount}</ItemCountValue>
        <DecrementBtn
          onClick={() =>
            itemCount === 1
              ? applyDelete(storeCtx.cartProducts, storeCtx.indexFinder(storeCtx.cartProducts, item.id))
              : itemCount > 1
              ? setItemCount(itemCount - 1)
              : null
          }
        >
          -
        </DecrementBtn>
      </ItemCountDiv>
    </StyledCartCard>
  ));

  return <>{list}</>;
});

export default CartItems;
