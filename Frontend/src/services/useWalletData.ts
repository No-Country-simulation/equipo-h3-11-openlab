import { useState, useEffect } from 'react';
import { useWallet } from "../context/WalletContext";
import { useFetch } from './useFetch';
// import { useWalletInfo } from '@reown/appkit/react'

const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://api.coinbase.com/api/v3/brokerage/market/products/ETH-USD',
    headers: {
      'Access-Control-Allow-Origin': '*', 
      'Content-Type': 'application/json'
    }
  };

export const useWalletData = () => {
    const [copyMessage, setCopyMessage] = useState('');
    const { signer, walletAddress } = useWallet();
    const { data } = useFetch(config)
    // const { walletInfo } = useWalletInfo()
    // console.log(walletInfo);

    const usdPrice = data?.price
    console.log(usdPrice);

    const [accountBalance, setAccountBalance] = useState<any>("No disponible");
    const [usdBalance, setUsdBalance] = useState<any>("No disponible");

    useEffect(() => {
        signer?.getBalance("latest")
        .then((res) => {
            let stringNumber = res.toString()
            let number = Number(stringNumber) // Para sacarle los 0 extras y convertirlo en valor
            let finalNumber = number / 1000000000000000000
            setAccountBalance(finalNumber)      
        })
        .finally(() => usdPrice ? setUsdBalance(usdPrice) : "")
    }, [])

    const handleCopy = () => {
        navigator.clipboard.writeText(walletAddress).then(() => {
            setCopyMessage('¡Copiado!');
            setTimeout(() => setCopyMessage(''), 2000); // Mensaje desaparece después de 2 segundos
        });
    };

    return ({
        walletAddress,
        copyMessage,
        accountBalance,
        usdBalance,
        handleCopy
    })
}