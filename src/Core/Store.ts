import { useState, useEffect, createContext } from 'react';
import { computed, set } from 'mobx';
import {
  registerRootStore,
  model,
  Model,
  modelAction,
  tProp,
  types,
  prop,
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
    this.cartProducts.push(item);
    console.log(item);
  }
}

export function createRootStore() {
  const rootStore = new CartStore({ cartProducts: [], wishlist: [] });

  registerRootStore(rootStore);
  return rootStore;
}

export const storeContext = createContext(createRootStore());
