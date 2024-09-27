import React from 'react';

const BitcoinPriceTracker = ({ currency, onCurrencyChange, price }) => {
  const currencies = ['USD', 'CAD', 'JPY', 'PHP'];

  return (
    <div className="bitcoin-price-tracker">
      <h2>Bitcoin Dashboard</h2>
      <p className="bitcoin-price">
        {price ? `${price.toLocaleString()} ${currency}` : 'Loading...'}
      </p>
      <select value={currency} onChange={onCurrencyChange}>
        {currencies.map((curr) => (
          <option key={curr} value={curr}>
            {curr}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BitcoinPriceTracker;
