import React, { useEffect } from 'react';
import { loadData } from './inventorySlice';
import { calculatePrice, getCurrencySymbol } from '../../utilites/utilities';
import { addItem } from '../cart/cartSlice';

export const Inventory = ({ inventory, currencyFilter, dispatch }) => {

    useEffect(() => {
        dispatch(loadData())
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onClickHandler = (item) => {
        dispatch(addItem(item));
    };

    return (
        <ul id="inventory-container">
            {inventory.map(item => (
                <li key={item.name} className="item">
                    <img src={item.img} alt={item.name} />
                    <h3>{item.name}</h3>
                    <h3 className="price">
                        {getCurrencySymbol(currencyFilter)}
                        {calculatePrice(item.price, currencyFilter).toFixed(2)} {currencyFilter}
                    </h3>
                    <button className="add-to-cart-button" onClick={() => onClickHandler(item)}>
                        Add to Cart
                    </button>
                </li>
            ))}
        </ul>
    );    
};