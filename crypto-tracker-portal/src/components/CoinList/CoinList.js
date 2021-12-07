import React from "react";
import Coin from "../Coin/Coin";

const CoinsList = ({ coins }) => {
    const renderedList = coins.map(coin => {
        return (
            <Coin
                key={coin.id}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                marketcap={coin.market_cap}
                price={coin.current_price}
                priceChange={coin.price_change_percentage_24h}
                volume={coin.total_volume}
            />
        );
    });

    return <div>{renderedList}</div>
};

export default CoinsList;


