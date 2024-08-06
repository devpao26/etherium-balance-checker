import React, { useState } from 'react';
import EthBalanceCheckerInput from './components/EthBalanceCheckerInput';
import EthBalanceCheckerDetails from './components/EthBalanceCheckerDetails';
import './App.css';

const App: React.FC = () => {
  const [address, setAddress] = useState<string | null>(null);

  return (
    <div className="container">
      <h1 className="font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-2">Ethereum Balance and Transaction Checker</h1>
      {!address ? (
        <EthBalanceCheckerInput onSubmit={setAddress} />
      ) : (
        <EthBalanceCheckerDetails address={address} />
      )}
    </div>
  );
};

export default App;