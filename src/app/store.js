import { createStore, combineReducers } from 'redux';
import { inventoryReducer } from '../features/inventory/inventorySlice';
import { currencyFilterReducer } from '../features/currenctyFilter/currencyFilterSlice';
import { cartReducer } from '../features/cart/cartSlice';

const reducers = {
    inventory: inventoryReducer,
    currencyFilter: currencyFilterReducer,
    cart: cartReducer
};

export const store = createStore(combineReducers(reducers));
