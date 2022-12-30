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

const WishlistItems = observer(() => {
  const storeCtx = useContext(storeContext);

  const [itemCount, setItemCount] = useState(1);

  const list = storeCtx.wishlist.map((item, index) => (
    <StyledCartCard key={index}>
      <CartBarImg src={item.image} alt={item.title} ></CartBarImg>
    </StyledCartCard>
  ));

  return <>{list}</>;
});

export default WishlistItems;
