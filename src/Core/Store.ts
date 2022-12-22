import { useState, useEffect, createContext } from 'react';
import { computed, observable, set } from 'mobx';
import {
  registerRootStore,
  model,
  Model,
  modelAction,
  tProp,
  types,
  prop,
  getSnapshot,
} from 'mobx-keystone';

@model('shoppingCart/Rating')
export class Rating extends Model({
  rate: tProp(types.number),
  count: tProp(types.number),
}) {}

@model('shoppingCart/Product')
export class Product extends Model({
  category: tProp(types.string),
  description: tProp(types.string),
  id: tProp(types.number),
  image: tProp(types.string),
  price: tProp(types.number),
  rating: tProp(types.object(types.model(Rating))),
  title: tProp(types.string),
}) {}

@model('shoppingCart/ShoppingSite')
export class CartStore extends Model({
  cartProducts: tProp(types.array(types.object(types.model(Product)))),
  wishlist: tProp(types.array(types.object(types.model(Product)))),
}) {
  @modelAction
  addToCart(item: Product) {
    this.checkIfAlreadyThere(item.id) ? null : this.cartProducts.push(item);
    console.log(item);
  }

  @modelAction
  checkIfAlreadyThere(id: number) {
    return this.cartProducts.find((elem) => elem.id === id) ? true : false;
  }

  @modelAction
  deleteFromCart(item: Product) {
    this.cartProducts.splice(
      this.cartProducts.findIndex((list) => item.id === list.id),
      1
    );
  }
}

export function createRootStore() {
  const rootStore = new CartStore({ cartProducts: [], wishlist: [] });
  // const snap = getSnapshot(CartStore);
  registerRootStore(rootStore);
  return rootStore;
}

export const storeContext = createContext(createRootStore());
