import React, { useState } from 'react';
import Footer from '../Conmponents/HomeComponents/Footer';
import Header from '../Conmponents/HomeComponents/Header';
import InputArea from '../Conmponents/HomeComponents/InputArea';
import ItemCard from '../Conmponents/HomeComponents/ItemCard';
import CartBar from '../Conmponents/HomeComponents/CartBar';
import Wishlist from '../Conmponents/HomeComponents/Wishlist';
import { Product, createRootStore } from './Store';
import { TypeCheckError } from 'mobx-keystone';
import WishListAndCart from '../Conmponents/HomeComponents/WishListAndCart';

const Home = () => {
  const [store] = useState(() => createRootStore());
  return (
    <>
      <Header />
      <InputArea />
      <WishListAndCart />
      {/* <Wishlist /> */}
      <Wishlist />
      <CartBar />
      <div>
        <ItemCard />
      </div>
    </>
  );
};

export default Home;
