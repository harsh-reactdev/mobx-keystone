import React, { useState, useEffect } from 'react';
import {
  AddToCartBtn,
  ProductImage,
  ProductPrice,
  ProductTitle,
  StyledItemImg,
  StyledItemCard,
} from '../StyledComponents/StyledComps';
import { ShoppingSite, Product } from '../../Core/Store';

function ItemCard() {
  // const pData = prodList.products.map((product: Product) => (
  return (
    <StyledItemCard>
      <ProductImage>
        {/* <StyledItemImg src={product.image} alt={product.title} /> */}
      </ProductImage>
      {/* <ProductTitle>{product.title}</ProductTitle> */}
      <AddToCartBtn>
        Add To Cart
        {/* <ProductPrice>${product.price}</ProductPrice> */}
      </AddToCartBtn>
    </StyledItemCard>
  );
  // ));
  // return <>{pData}</>;
}

export default ItemCard;
