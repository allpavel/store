import React from 'react';
import { Inventory } from '../features/inventory/inventory';
import { CurrencyFilter } from '../features/currenctyFilter/currencyFilter';
import { Cart } from '../features/cart/cart';

export const App = (props) => {
    const { state, dispatch } = props;

    return (
        <div>
            <CurrencyFilter currencyFilter={state.currencyFilter} dispatch={dispatch} />
            <Inventory inventory={state.inventory} currencyFilter={state.currencyFilter} dispatch={dispatch} />
            <Cart cart={state.cart} currencyFilter={state.currencyFilter} dispatch={dispatch} />
        </div>
    );
};