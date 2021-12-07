import React, { useState, useEffect } from 'react';
import coingecko from '../../api/coingecko';
import './App.css';
import CoinsList from '../CoinsList/CoinsList';
import SearchBar from '../SearchBar/SearchBar';

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
      <SearchBar handleChange={handleChange} />
      <CoinsList coins={filteredCoins} />
    </div>
  );
};


export default App;

