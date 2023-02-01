import React from "react";
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from "react";

const CoinGeckoAPI = "https://api.coingecko.com/api/v3/global";

function Markets() {


    const [marketCap, setMarketCap] = useState(0);

    useEffect(() => {
        fetch(CoinGeckoAPI)
            .then(response => response.json())
            .then(data => setMarketCap(data.data.total_market_cap.usd))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className={styles.main}>
            <h1>Markets Page</h1>
            <p>
                Current Market Cap: ${marketCap.toLocaleString()}
            </p>
        </div>

    )
}

export default Markets;