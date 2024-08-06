import React, { useState } from 'react';

interface EthBalanceCheckerInputProps {
  onSubmit: (address: string) => void;
}

const EthBalanceCheckerInput: React.FC<EthBalanceCheckerInputProps> = ({ onSubmit }) => {
  const [address, setAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (address) {
      onSubmit(address);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Enter Ethereum address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-full"
          required
        />
        
        <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded-md"> Fetch Etherium </button>
      </form>
    </div>
  );
};

export default EthBalanceCheckerInput;