import { registerRootStore } from 'mobx-keystone';
import { useState, useEffect } from 'react';
import { computed } from 'mobx';
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
}) {
  @modelAction
  addToCart() {
    console.log(this.title);
  }
}

@model('shoppingCart/ShoppingSite')
export class ShoppingSite extends Model({
  products: tProp(types.array(types.model(Product)), () => []),
}) {
  @computed
  CategoryBasedProducts(category: string) {
    return this.products.filter((prod) => prod.category === category);
  }
}

export function createRootStore() {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((response) => response.json())
      .then((response) => {
        const pData = response;
        setProductData(pData);
      });
  }, []);

  const rootStore = new ShoppingSite({ products: productData });

  registerRootStore(rootStore);
}
