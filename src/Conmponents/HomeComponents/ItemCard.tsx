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
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((response) => response.json())
      .then((response) => {
        const pData = response;
        setProductData(pData);
      });
  }, []);
  const pData = productData.map((product: Product) => (
    // return (
    <StyledItemCard>
      <ProductImage>
        <StyledItemImg src={product.image} alt={product.title} />
      </ProductImage>
      <ProductTitle>{product.title}</ProductTitle>
      <AddToCartBtn>
        Add To Cart
        <ProductPrice>${product.price}</ProductPrice>
      </AddToCartBtn>
    </StyledItemCard>
    // );
  ));
  return <>{pData}</>;
}

export default ItemCard;
