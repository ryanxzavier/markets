import React from "react";
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from "react";

const CoinGeckoAPI_MarketCap = "https://api.coingecko.com/api/v3/global";

function Markets() {


    const [marketData, setMarketData] = useState({
        marketCap: 0,
        totalVolume: 0,
        btcMC: 0,
        ethMC: 0,
        xrpMC: 0,
    }
    );

    const [coins, setCoins] = useState({});

    useEffect(() => {
        fetch(CoinGeckoAPI_MarketCap)
            .then(response => response.json())
            .then(data => {
                setMarketData({
                    marketCap: data.data.total_market_cap.usd,
                    totalVolume: data.data.total_volume.usd,
                    btcMC: data.data.total_market_cap.btc,
                    ethMC: data.data.total_market_cap.btc,
                    xrpMC: data.data.total_market_cap.xrp,
                });
            });
    }, []);


    return (
        <div className={styles.main}>
            <h1>Markets Page</h1>
            <p>
                Current Market Cap: ${marketData.marketCap.toLocaleString()}
            </p>
            <h2>BTC</h2>
            <p>
                Market Cap: $ {marketData.btcMC.toLocaleString()}
            </p>
            <h2>ETH</h2>
            <p>
                Market Cap: $ {marketData.ethMC.toLocaleString()}
            </p>
            <h2>XRP</h2>
            <p>
                Market Cap: $ {marketData.xrpMC.toLocaleString()}
            </p>
        </div>

    )
}

export default Markets;