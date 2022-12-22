import React from 'react';
import Footer from './HomeComponents/Footer';
import Header from './HomeComponents/Header';
import InputArea from './HomeComponents/InputArea';
import ItemCard from './HomeComponents/ItemCard';
import CartBar from './HomeComponents/CartBar';
import Wishlist from './HomeComponents/WishListAndCart';

const Home = () => {
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
