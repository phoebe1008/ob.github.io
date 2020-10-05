import { combineReducers } from 'redux';
import Product from './Product.js';
import ShopCar from './ShopCar.js';

const ProductAPP = combineReducers({
  Product,
  ShopCar,
});

export default ProductAPP;