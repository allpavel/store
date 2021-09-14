import React from 'react';
import { setCurrency } from './currencyFilterSlice';

const currencies = ["USD", "EUR", "CAD"];

export const CurrencyFilter = ({ currencyFilter, dispatch }) => {
    const onClickHandler = (currency) => {
        dispatch(setCurrency(currency));
    };

    return (
        <div id="currency-filters-container">
            <h3>Choose a currency</h3>
            {currencies.map(currency => (
                <button className={"currency-button " + (currencyFilter === currency && 'selected')} key={currency} onClick={() => onClickHandler(currency)}>
                    {currency}
                </button>
            ))}
        </div>
    )
}