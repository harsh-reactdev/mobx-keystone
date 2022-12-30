import React, { useState, useEffect } from 'react';
import {
  AddToCartBtn,
  ProductImage,
  ProductPrice,
  ProductTitle,
  StyledItemImg,
  StyledItemCard,
  AddToWishListBtn,
} from '../StyledComponents/StyledComps';
import { Product, storeContext } from '../../Core/Store';
import { useContext } from 'react';
import { observer } from 'mobx-react';
import { applyDelete, applyMethodCall, applySet } from 'mobx-keystone';

function ItemCard() {
  const storeCtx = useContext(storeContext);

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((response) => response.json())
      .then((response) => {
        const pData = response;
        setProductData(pData);
      });
  }, []);

  const pData = productData.map((product: Product, index: number) => (
    <StyledItemCard key={index}>
      <ProductImage>
        <StyledItemImg src={product.image} alt={product.title} />
      </ProductImage>
      <ProductTitle>{product.title}</ProductTitle>
      <span>
        <AddToCartBtn
          onClick={() => {
            // storeCtx.addItem(product, storeCtx.cartProducts);
            storeCtx.checkIfAlreadyThere(product.id, storeCtx.cartProducts) ?
              null : applyMethodCall(storeCtx.cartProducts, "push", product);
              // applySet(storeCtx.cartProducts, 1, product);
          }}
        >
          Add To Cart
          <ProductPrice>${product.price}</ProductPrice>
        </AddToCartBtn>
      </span>
      <span>
        <AddToWishListBtn
          onClick={() =>
            storeCtx.checkIfAlreadyThere(product.id, storeCtx.wishlist)
              // ? storeCtx.deleteItem(product, storeCtx.wishlist)
              ? applyDelete(storeCtx.wishlist, storeCtx.indexFinder(storeCtx.wishlist, product.id))
              // : storeCtx.addItem(product, storeCtx.wishlist)
              : applyMethodCall(storeCtx.wishlist, "push", product)
              // : applySet(storeCtx.wishlist, storeCtx.wishlist.length, product)
          }
        >
          ♡
        </AddToWishListBtn>
      </span>
    </StyledItemCard>
  ));
  return <>{pData}</>;
}

export default ItemCard;
