import axios from "axios"

export default axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/coins/markets',
    params: {
        vs_currency: 'usd',
        order: 'merket_cap_desc',
        per_page: 50,
        page: 1,
        sparkline: false
    }
});


