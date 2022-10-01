import { createContext, useContext, useEffect, useState } from 'react';

const Crypto = createContext();

export const CryptoState = () => {
  return useContext(Crypto)
}

const CryptoContext = ({children}) => {
  const [currency, setCurrency] = useState('INR');
  const [symbol, setSymbol] = useState('!');

  useEffect(() => {
    if(currency === "INR"){
      setSymbol('!')
    }else if(currency === "USD") {
      setSymbol('$')
    }
  }, [currency, symbol])

  const value = {
    currency, 
    symbol,
    setCurrency,
  }
  return (
    <Crypto.Provider value={value}>
      {children}
    </Crypto.Provider>
  )
}

export default CryptoContext;