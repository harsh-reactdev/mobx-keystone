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
  fromSnapshot,
  onActionMiddleware,
  serializeActionCall,
  ActionTrackingResult,
  DataModel,
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
  // @modelAction
  // computeCartTotal(price: number, action: string) {
  //   action === 'add' ? (this.cartTotal += price) : (this.cartTotal -= price);
  // }
  @modelAction
  checkIfAlreadyThere(id: number, dest: Product[]) {
    return dest.find((elem) => elem.id === id) ? true : false;
  }

  @modelAction
  addItem(item: Product, dest: Product[]) {
    const check = this.checkIfAlreadyThere(item.id, dest);
    if (!check) dest.push(item);
    // // console.log(item);
  }

  @modelAction
  addAndRemoveFromWIshlist(item: Product) {
    this.checkIfAlreadyThere(item.id, this.wishlist)
      ? this.deleteItem(item, this.wishlist)
      : this.addItem(item, this.wishlist);
  }

  @modelAction
  deleteItem(item: Product, dest: Product[]) {
    dest.splice(
      dest.findIndex((list) => item.id === list.id),
      1
    );
  }
}

export function createRootStore() {
  const rootStore = new CartStore({
    cartProducts: [],
    wishlist: [],
  });
  registerRootStore(rootStore);
  return rootStore;
}

const newRootStoreSnapshot = getSnapshot(createRootStore());
const rootstore = fromSnapshot<CartStore>(newRootStoreSnapshot);

// onActionMiddleware(rootstore, {
//   onStart(actionCall, actionContext) {
//     const serializedActionCall = serializeActionCall(actionCall, rootstore);

//     // return {
//     //   result: ActionTrackingResult.Throw,
//     //   value: new Error('Error thrown by onActionMiddleware'),
//     // };

//     return {
//       result: ActionTrackingResult.Return,
//       value: actionCall.actionName,
//     };
//   },

//   onFinish(actionCall, actionContext, ret) {
//     if (ret.result === ActionTrackingResult.Throw) {
//       console.log(ret.value);
//     } else {
//       console.log(ret.value);
//     }
//   },
// });

export const storeContext = createContext(rootstore);
