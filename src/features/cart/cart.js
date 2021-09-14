import React from 'react';
import { changeItemQuantity } from './cartSlice';
import { calculateTotal, getCurrencySymbol } from '../../utilites/utilities';

export const Cart = ({ cart, currencyFilter, dispatch }) => {
    const onInputChangeHandler = (name, input) => {
        if (input === '') {
            return;
        }
        const newQuantity = Number(input);
        dispatch(changeItemQuantity(name, newQuantity));
    };

    const cartElements = [];
    for (let name in cart) {
        cartElements.push(createCartItem(name));
    };

    const total = calculateTotal(cart, currencyFilter);

    return (
        <div id="cart-container">
            <ul id={"cart-items"}>{cartElements}</ul>
            <h3 className="total">
                Total{' '}
                <span className={"total-value"}>
                    {getCurrencySymbol(currencyFilter)}{total} {currencyFilter}
                </span>
            </h3>
        </div>
    );

    function createCartItem(name) {
        const item = cart[name];
        if (item.quantity === 0) {
            return;
        }
        return (
            <li key={name}>
                <p>{name}</p>
                <select className="item-quantity" value={item.quantity} onChange={(event) => onInputChangeHandler(name, event.target.value)}> 
                    {[...Array(100).keys()].map((_, index) => (
                        <option key={index} value={index}>
                            {index}
                        </option>
                    ))}
                </select>
            </li>
        );
    }
};