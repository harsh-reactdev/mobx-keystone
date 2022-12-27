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
import { fromSnapshot, getSnapshot } from 'mobx-keystone';

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

  const pData = productData.map((product: Product, index: number) => {
    // const prod = new Product(product);
    // const newItemSnap = getSnapshot(product);
    // const newProduct = fromSnapshot<Product>(newItemSnap);
    // console.log(newItemSnap);
    return (
      <StyledItemCard key={index}>
        <ProductImage>
          <StyledItemImg src={product.image} alt={product.title} />
        </ProductImage>
        <ProductTitle>{product.title}</ProductTitle>
        <span>
          <AddToCartBtn
            onClick={() => {
              storeCtx.addItem(product, storeCtx.cartProducts);
            }}
          >
            Add To Cart
            <ProductPrice>${product.price}</ProductPrice>
          </AddToCartBtn>
        </span>
        <span>
          <AddToWishListBtn
            onClick={() => storeCtx.addAndRemoveFromWIshlist(product)}
          >
            ♡
          </AddToWishListBtn>
        </span>
      </StyledItemCard>
    );
  });
  return <>{pData}</>;
}

export default ItemCard;
