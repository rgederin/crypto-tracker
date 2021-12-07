import React, { useState, useEffect } from 'react';
import coingecko from '../../api/coingecko';
import './App.css';
import CoinsList from '../CoinList/CoinList';

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

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input type="text" placeholder="Search" className="coin-input" onChange={handleChange} />
        </form>
      </div>
      <CoinsList coins={filteredCoins} />
    </div>
  );
};


export default App;

