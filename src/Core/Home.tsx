import React, { useState } from 'react';
import Footer from '../Conmponents/HomeComponents/Footer';
import Header from '../Conmponents/HomeComponents/Header';
import InputArea from '../Conmponents/HomeComponents/InputArea';
import ItemCard from '../Conmponents/HomeComponents/ItemCard';
import CartBar from '../Conmponents/HomeComponents/CartBar';
import Wishlist from '../Conmponents/HomeComponents/WishListAndCart';
import { Product, createRootStore } from './Store';
import { TypeCheckError } from 'mobx-keystone';

const Home = () => {
  const [store] = useState(() => createRootStore());
  return (
    <>
      <Header />
      <InputArea />
      <Wishlist />
      <CartBar />
      <div>
        <ItemCard />
      </div>
    </>
  );
};

export default Home;
