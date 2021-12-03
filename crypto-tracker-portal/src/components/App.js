import React, { useState, useEffect } from 'react';
import coingecko from '../api/coingecko';
import './App.css';
import Coin from './Coin';

const App = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchCoins();
  }, []);

  const fetchCoins = async () => {
    const response = await coingecko.get();
    setCoins(response.data);
  };

  const handleChange = element => {
    setSearch(element.target.value)
  };

  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

  console.log(coins);
  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency </h1>
        <form>
          <input type="text" placeholder="Search" className="coin-input" onChange={handleChange} />
        </form>
      </div>
      {filteredCoins.map(coin => {
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
      })}
    </div>
  );
};


export default App;

