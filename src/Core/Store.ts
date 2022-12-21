import { registerRootStore } from 'mobx-keystone';
import { useState, useEffect } from 'react';
import { computed, set } from 'mobx';
import { model, Model, modelAction, tProp, types } from 'mobx-keystone';

@model('shoppingCart/Product')
export class Product extends Model({
  category: tProp(types.string),
  description: tProp(types.string),
  id: tProp(types.number),
  image: tProp(types.string),
  price: tProp(types.number),
  rating: tProp(types.object(types.number)),
  title: tProp(types.string),
}) {}

@model('shoppingCart/ShoppingSite')
export class ShoppingSite extends Model({
  cartProducts: tProp(types.array(types.model(Product)), () => []).withSetter(),
}) {
  @computed
  CategoryBasedProducts(category: string) {
    return this.cartProducts.filter((prod) => prod.category === category);
  }
  @modelAction
  addToCart(item: Product) {
    this.cartProducts.push(item);
  }
}

export function createRootStore() {
  const rootStore = new ShoppingSite({ cartProducts: [] });

  registerRootStore(rootStore);
  return rootStore;
}
