import React from "react";
import './Coin.css';

const Coin = ({ image, name, symbol, price, volume, priceChange, marketcap }) => {
    
    const renderPriceChange = priceChange => {
        const className = priceChange < 0 ? 'coin-percent red' : 'coin-percent green';

        return (
            <p className={className}>{priceChange.toFixed(2)}%</p>
        );
    }

    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto" />
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">${price}</p>
                    {renderPriceChange(priceChange)}
                    <p className="coin-marketcap">
                        Mkt Cap: ${marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Coin;